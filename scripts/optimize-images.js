#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const OUTPUT_FORMATS = ['webp', 'avif'];
const SIZES = [320, 640, 768, 1024, 1280, 1536, 1920];
const QUALITY = {
  webp: 85,
  avif: 80,
  jpg: 85
};

async function* walkDirectory(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      yield* walkDirectory(filePath);
    } else if (stats.isFile()) {
      yield filePath;
    }
  }
}

async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  console.log(`Optimizing: ${imagePath}`);
  
  const dir = path.dirname(imagePath);
  const name = path.basename(imagePath, ext);
  
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Generate responsive images
    for (const size of SIZES) {
      if (size > metadata.width) continue;
      
      // Original format optimized
      await image
        .resize(size)
        .jpeg({ quality: QUALITY.jpg, progressive: true })
        .toFile(path.join(dir, `${name}-${size}w${ext}`));
      
      // Modern formats
      for (const format of OUTPUT_FORMATS) {
        const outputPath = path.join(dir, `${name}-${size}w.${format}`);
        
        if (format === 'webp') {
          await image
            .resize(size)
            .webp({ quality: QUALITY.webp })
            .toFile(outputPath);
        } else if (format === 'avif') {
          await image
            .resize(size)
            .avif({ quality: QUALITY.avif })
            .toFile(outputPath);
        }
      }
    }
    
    // Generate blur placeholder
    const placeholder = await image
      .resize(10)
      .blur()
      .toBuffer();
    
    const base64 = `data:image/jpeg;base64,${placeholder.toString('base64')}`;
    
    // Save placeholder data
    const placeholderPath = path.join(dir, `${name}.placeholder.txt`);
    fs.writeFileSync(placeholderPath, base64);
    
    console.log(`✓ Optimized ${imagePath}`);
    console.log(`  - Generated ${SIZES.length} sizes`);
    console.log(`  - Created WebP and AVIF versions`);
    console.log(`  - Generated blur placeholder`);
    
  } catch (error) {
    console.error(`✗ Error optimizing ${imagePath}:`, error.message);
  }
}

async function generateImageMap(baseDir) {
  const imageMap = {};
  
  for await (const filePath of walkDirectory(baseDir)) {
    const ext = path.extname(filePath).toLowerCase();
    if (!IMAGE_EXTENSIONS.includes(ext)) continue;
    
    const relativePath = path.relative(baseDir, filePath);
    const dir = path.dirname(relativePath);
    const name = path.basename(filePath, ext);
    
    // Check for optimized versions
    const optimizedSizes = [];
    for (const size of SIZES) {
      const webpPath = path.join(path.dirname(filePath), `${name}-${size}w.webp`);
      if (fs.existsSync(webpPath)) {
        optimizedSizes.push(size);
      }
    }
    
    // Check for placeholder
    const placeholderPath = path.join(path.dirname(filePath), `${name}.placeholder.txt`);
    let placeholder = null;
    if (fs.existsSync(placeholderPath)) {
      placeholder = fs.readFileSync(placeholderPath, 'utf-8');
    }
    
    imageMap[relativePath] = {
      original: relativePath,
      optimizedSizes,
      hasWebP: optimizedSizes.length > 0,
      hasAVIF: fs.existsSync(path.join(path.dirname(filePath), `${name}-${SIZES[0]}w.avif`)),
      placeholder
    };
  }
  
  // Save image map
  const mapPath = path.join(baseDir, 'image-map.json');
  fs.writeFileSync(mapPath, JSON.stringify(imageMap, null, 2));
  console.log(`\nImage map saved to: ${mapPath}`);
  
  return imageMap;
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const targetPath = args[1] || './public/images';
  
  if (command === 'optimize') {
    console.log(`Optimizing images in: ${targetPath}\n`);
    
    if (fs.existsSync(targetPath)) {
      const stats = await stat(targetPath);
      
      if (stats.isDirectory()) {
        for await (const filePath of walkDirectory(targetPath)) {
          await optimizeImage(filePath);
        }
      } else if (stats.isFile()) {
        await optimizeImage(targetPath);
      }
    } else {
      console.error(`Path not found: ${targetPath}`);
      process.exit(1);
    }
  } else if (command === 'analyze') {
    console.log(`Analyzing images in: ${targetPath}\n`);
    
    const imageMap = await generateImageMap(targetPath);
    
    // Generate report
    const totalImages = Object.keys(imageMap).length;
    const optimizedImages = Object.values(imageMap).filter(img => img.hasWebP).length;
    const withPlaceholders = Object.values(imageMap).filter(img => img.placeholder).length;
    
    console.log('\n=== Image Optimization Report ===');
    console.log(`Total images: ${totalImages}`);
    console.log(`Optimized images: ${optimizedImages} (${Math.round(optimizedImages/totalImages*100)}%)`);
    console.log(`With placeholders: ${withPlaceholders} (${Math.round(withPlaceholders/totalImages*100)}%)`);
    console.log('\nUnoptimized images:');
    
    Object.entries(imageMap).forEach(([path, info]) => {
      if (!info.hasWebP) {
        console.log(`  - ${path}`);
      }
    });
  } else {
    console.log('Image Optimization Tool\n');
    console.log('Usage:');
    console.log('  node optimize-images.js optimize [path]  - Optimize images');
    console.log('  node optimize-images.js analyze [path]   - Analyze image optimization status');
    console.log('\nExample:');
    console.log('  node optimize-images.js optimize ./public/images');
    console.log('  node optimize-images.js analyze ./public');
  }
}

// Check if sharp is installed
try {
  require('sharp');
} catch (error) {
  console.error('Sharp is not installed. Please run: npm install sharp');
  process.exit(1);
}

main().catch(console.error);