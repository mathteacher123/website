import fs from "fs";
import path from "path";

export function getImagesFromFolder(folderName) {
  // Absolute path to the folder inside "public"
  const folderPath = path.join(process.cwd(), "public", folderName);

  // Read all files
  let files = fs.readdirSync(folderPath);

  // Sort filenames in ascending order
  files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log(files)
  // Return array of relative paths (relative to public)
  return files.map(file => `/${folderName}/${file}`);
}
