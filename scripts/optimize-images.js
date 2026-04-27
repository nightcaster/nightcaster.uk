import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';

const CONFIG_PATH = './image-config.json';

async function main() {
  const config = JSON.parse(await fs.readFile(CONFIG_PATH, 'utf-8'));
  const { types, sourceDir, targetDir } = config;

  console.log('🚀 Starting image optimization...');

  // Ensure target directory exists
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const images = await findImages(sourceDir);
  console.log(`📸 Found ${images.length} source images.`);

  const manifest = {};
  let processedCount = 0;
  let skippedCount = 0;

  for (const imagePath of images) {
    const relativePath = path.relative(sourceDir, imagePath).replace(/\\/g, '/');
    const fileNameWithoutExt = path.parse(relativePath).name;
    const subDir = path.dirname(relativePath);
    const photoId = fileNameWithoutExt; // Use filename as key in manifest

    // Get metadata for orientation
    const metadata = await sharp(imagePath).metadata();
    manifest[relativePath] = {
      width: metadata.width,
      height: metadata.height,
      orientation: metadata.width > metadata.height ? 'landscape' : 'portrait'
    };

    for (const [typeName, typeConfig] of Object.entries(types)) {
      const targetSubDir = path.join(targetDir, subDir);
      if (!existsSync(targetSubDir)) {
        mkdirSync(targetSubDir, { recursive: true });
      }

      const targetFileName = `${fileNameWithoutExt}-${typeName}.${typeConfig.format}`;
      const targetPath = path.join(targetSubDir, targetFileName);

      // Cache check: compare modification times
      let shouldProcess = true;
      if (existsSync(targetPath)) {
        const sourceStat = await fs.stat(imagePath);
        const targetStat = await fs.stat(targetPath);
        if (targetStat.mtime > sourceStat.mtime) {
          shouldProcess = false;
        }
      }

      if (shouldProcess) {
        try {
          let pipeline = sharp(imagePath);

          if (typeConfig.width || typeConfig.height) {
            pipeline = pipeline.resize({
              width: typeConfig.width,
              height: typeConfig.height,
              fit: typeConfig.fit || 'inside'
            });
          }

          if (typeConfig.format === 'webp') {
            pipeline = pipeline.webp({ quality: typeConfig.quality || 80 });
          } else if (typeConfig.format === 'jpeg' || typeConfig.format === 'jpg') {
            pipeline = pipeline.jpeg({ quality: typeConfig.quality || 80 });
          }

          await pipeline.toFile(targetPath);
          processedCount++;
        } catch (err) {
          console.error(`❌ Error processing ${imagePath} for ${typeName}:`, err.message);
        }
      } else {
        skippedCount++;
      }
    }
  }

  // Save manifest
  const manifestPath = path.resolve('src/lib/data/manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`✅ Done! Processed: ${processedCount}, Skipped (cached): ${skippedCount}`);
}

async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip the optimized directory if it's inside the source directory
        if (entry.name === 'optimized' || entry.name === 'processed') return [];
        return findImages(res);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          return res;
        }
        return [];
      }
    })
  );
  return files.flat();
}

main().catch(console.error);
