#!/bin/bash

# Emergency build fix script
echo "Fixing build issues..."

# Remove problematic caches and modules
rm -rf .next 2>/dev/null
rm -rf node_modules 2>/dev/null
rm -rf /tmp/npm-* 2>/dev/null

# Create temp directory for npm cache
export npm_config_cache=/tmp/npm-cache-$$
mkdir -p $npm_config_cache

# Install with temporary cache
npm install --force --cache=$npm_config_cache

# Try to build
npm run build

# Cleanup temp cache
rm -rf $npm_config_cache

echo "Build fix complete"