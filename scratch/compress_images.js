import sharp from "sharp";
import path from "path";
import fs from "fs";

const projectRoot = process.cwd();
const assetsDir = path.resolve(projectRoot, "attached_assets");

const files = [
  "ratnai.png",
  "amrutdhara.png",
  "janayitri.png",
  "caf_go_boost.png",
  "image_1781081387145.png"
];

async function compress() {
  console.log("Starting image compression...");
  
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputName = file.replace(".png", ".webp");
    const outputPath = path.join(assetsDir, outputName);
    
    if (fs.existsSync(inputPath)) {
      console.log(`Compressing ${file} -> ${outputName}`);
      const statsBefore = fs.statSync(inputPath);
      console.log(`Size before: ${(statsBefore.size / (1024 * 1024)).toFixed(2)} MB`);
      
      const isLogo = file.includes("image_1781081387145");
      const targetWidth = isLogo ? 200 : 800;

      await sharp(inputPath)
        .resize({ width: targetWidth }) 
        .webp({ quality: 80 }) 
        .toFile(outputPath);
        
      const statsAfter = fs.statSync(outputPath);
      console.log(`Size after: ${(statsAfter.size / 1024).toFixed(2)} KB`);
      console.log(`Compression ratio: ${((1 - statsAfter.size / statsBefore.size) * 100).toFixed(2)}%\n`);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
  
  console.log("Image compression complete!");
}

compress().catch(err => {
  console.error("Error during compression:", err);
});
