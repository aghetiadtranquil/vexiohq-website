#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration  
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.tif'];
const OUTPUT_FORMATS = ['webp', 'avif'];
const SIZES = [320, 640, 750, 828, 1080, 1200, 1440, 1920, 2048];
const QUALITY = {
  webp: 85,
  avif: 75, // AVIF can use lower quality for same visual result
  jpg: 85,
  png: 95
};

// #COMPLETION_DRIVE_IMPL: Adding support for different optimization profiles
const OPTIMIZATION_PROFILES = {
  hero: { sizes: [640, 1200, 1920, 2048], quality: { webp: 90, avif: 85, jpg: 90 } },
  feature: { sizes: [320, 640, 1024], quality: { webp: 85, avif: 75, jpg: 85 } },
  blog: { sizes: [640, 1200], quality: { webp: 80, avif: 70, jpg: 80 } },
  icon: { sizes: [32, 64, 128], quality: { webp: 95, avif: 90, jpg: 95 } },
  default: { sizes: SIZES, quality: QUALITY }
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

async function optimizeImage(imagePath, profileName = 'default') {
  const ext = path.extname(imagePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  console.log(`Optimizing: ${imagePath} (${profileName} profile)`);
  
  const dir = path.dirname(imagePath);
  const name = path.basename(imagePath, ext);
  const profile = OPTIMIZATION_PROFILES[profileName] || OPTIMIZATION_PROFILES.default;
  
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Generate responsive images
    let generatedSizes = 0;
    for (const size of profile.sizes) {
      if (size > metadata.width) continue;
      
      generatedSizes++;
      
      // Original format optimized with profile quality
      const originalQuality = profile.quality.jpg || QUALITY.jpg;
      if (ext === '.png') {
        await image
          .resize(size)
          .png({ quality: profile.quality.png || QUALITY.png, compressionLevel: 9 })
          .toFile(path.join(dir, `${name}-${size}w.png`));
      } else {
        await image
          .resize(size)
          .jpeg({ quality: originalQuality, progressive: true, mozjpeg: true })
          .toFile(path.join(dir, `${name}-${size}w.jpg`));
      }
      
      // Modern formats with profile-specific quality
      for (const format of OUTPUT_FORMATS) {
        const outputPath = path.join(dir, `${name}-${size}w.${format}`);
        const formatQuality = profile.quality[format] || QUALITY[format];
        
        if (format === 'webp') {
          await image
            .resize(size)
            .webp({ 
              quality: formatQuality,
              effort: 6, // Max compression effort
              nearLossless: profileName === 'icon' // Use near-lossless for icons
            })
            .toFile(outputPath);
        } else if (format === 'avif') {
          await image
            .resize(size)
            .avif({ 
              quality: formatQuality,
              effort: 9, // Max compression effort
              speed: 0    // Slowest/best compression
            })
            .toFile(outputPath);
        }
      }
    }
    
    // Generate blur placeholder with better quality for critical images
    const placeholderSize = profileName === 'hero' ? 20 : 10;
    const placeholderBlur = profileName === 'hero' ? 15 : 20;
    
    const placeholder = await image
      .resize(placeholderSize, placeholderSize)
      .blur(placeholderBlur)
      .jpeg({ quality: 50 })
      .toBuffer();
    
    const base64 = `data:image/jpeg;base64,${placeholder.toString('base64')}`;
    
    // Save placeholder data
    const placeholderPath = path.join(dir, `${name}.placeholder.txt`);
    fs.writeFileSync(placeholderPath, base64);
    
    console.log(`✓ Optimized ${imagePath}`);
    console.log(`  - Generated ${generatedSizes} sizes using ${profileName} profile`);
    console.log(`  - Created WebP and AVIF versions`);
    console.log(`  - Generated blur placeholder (${placeholderSize}px)`);
    
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

// Auto-detect optimization profile based on directory name
function detectProfile(filePath) {
  const dirName = path.basename(path.dirname(filePath));
  
  if (dirName.includes('hero')) return 'hero';
  if (dirName.includes('feature')) return 'feature'; 
  if (dirName.includes('blog')) return 'blog';
  if (dirName.includes('icon')) return 'icon';
  
  return 'default';
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const targetPath = args[1] || './public/images';
  const profileOverride = args[2]; // Optional profile override
  
  if (command === 'optimize') {
    console.log(`Optimizing images in: ${targetPath}\n`);
    
    if (fs.existsSync(targetPath)) {
      const stats = await stat(targetPath);
      
      if (stats.isDirectory()) {
        for await (const filePath of walkDirectory(targetPath)) {
          const profile = profileOverride || detectProfile(filePath);
          await optimizeImage(filePath, profile);
        }
      } else if (stats.isFile()) {
        const profile = profileOverride || detectProfile(targetPath);
        await optimizeImage(targetPath, profile);
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
    console.log('  node optimize-images.js optimize [path] [profile]  - Optimize images');
    console.log('  node optimize-images.js analyze [path]              - Analyze image optimization status');
    console.log('\nProfiles:');
    console.log('  hero     - Hero images (high quality, large sizes)');
    console.log('  feature  - Feature images (balanced quality/size)');
    console.log('  blog     - Blog images (moderate quality)');  
    console.log('  icon     - Icons/logos (high quality, small sizes)');
    console.log('  default  - General purpose optimization');
    console.log('\nExamples:');
    console.log('  node optimize-images.js optimize ./public/images');
    console.log('  node optimize-images.js optimize ./public/images/hero hero');
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