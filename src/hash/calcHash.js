import fs from "fs/promises";
import crypto from "crypto";
import * as url from "url";
import path from "path";

const calculateHash = async () => {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  try {
    const fileData = await fs.readFile(filePath);
    const hash = crypto.createHash("sha256").update(fileData);
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  } catch (error) {
    throw error;
  }
};

await calculateHash();
