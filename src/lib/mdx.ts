import fs from "node:fs/promises";
import path from "node:path";

// Helper function to get all file paths recursively
// @ts-ignore
async function* getFilePaths(dir) {
  const dirEntries = await fs.readdir(dir, { withFileTypes: true });
  for (const dirEntry of dirEntries) {
    const fullPath = path.join(dir, dirEntry.name);
    if (dirEntry.isDirectory()) {
      yield* getFilePaths(fullPath);
    } else {
      yield fullPath;
    }
  }
}

export const getMdxDataList = async () => {
  const postsList = [];
  const cwd = path.join(process.cwd(), 'content');
  const filePaths = [];

  // Collect all file paths
  for await (const filePath of getFilePaths(cwd)) {
    filePaths.push(filePath);
  }

  const sortedPosts = await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        // Get the relative path from the 'content' directory
        const relativePath = path.relative(cwd, filePath);
    

        const { metadata } = await import(`../../content/${relativePath}`);
        const slug = relativePath.slice(0, -path.extname(relativePath).length);
        return { ...metadata, slug };
      } catch (error) {
        console.error(`Error importing file ${filePath}:`, error);
        return null;
      }
    })
  );

  // Filter out any null results from failed imports
  const validPosts = sortedPosts.filter(post => post !== null);

  // Sort posts based on the date
  // @ts-ignore
  validPosts.sort((a, b) => new Date(a.date) - new Date(b.date));

  return validPosts;
};
