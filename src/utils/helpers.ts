import * as fs from 'fs';
import * as path from 'path';
export function importObjectsFromFolder(folderPath: string): any[] {
  const files = fs.readdirSync(path.resolve(__dirname, '..',folderPath));
  const objects: any[] = [];

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (file.endsWith('.ts')) {
      try {
        const exportedObject =  require("./../"+filePath);
        if (exportedObject) {
          objects.push(exportedObject.default);
        }
      } catch (error) {
        console.error(`Error importing ${filePath}: ${error.message}`);
      }
    }
  });

  return objects;
}