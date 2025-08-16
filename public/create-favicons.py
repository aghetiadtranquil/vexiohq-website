#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon(size):
    """Create a favicon with DT text"""
    # Create a new image with a gradient-like blue/purple background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw rounded rectangle background
    padding = int(size * 0.1)
    draw.rounded_rectangle(
        [(padding, padding), (size - padding, size - padding)],
        radius=int(size * 0.2),
        fill=(59, 130, 246)  # Blue color
    )
    
    # Try to use a font, fallback to default if not available
    try:
        font_size = int(size * 0.35)
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        font = ImageFont.load_default()
    
    # Draw text
    text = "DT"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((size - text_width) // 2, (size - text_height) // 2)
    draw.text(position, text, fill='white', font=font)
    
    return img

# Create all required favicon sizes
sizes = [16, 32, 192, 512, 180]
filenames = {
    16: 'favicon-16x16.png',
    32: 'favicon-32x32.png',
    192: 'favicon-192x192.png',
    512: 'favicon-512x512.png',
    180: 'apple-touch-icon.png'
}

for size in sizes:
    img = create_favicon(size)
    filename = filenames[size]
    img.save(filename, 'PNG')
    print(f"Created {filename}")

print("All favicon files created successfully!")