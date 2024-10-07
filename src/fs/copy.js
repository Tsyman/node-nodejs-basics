import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const copy = async () => {
  const sourceFolder = path.join(__dirname, "files");
  const destinationFolder = path.join(__dirname, "files_copy");

  try {
    fs.mkdirSync(destinationFolder);
    const files = fs.readdirSync(sourceFolder);

    files.forEach((file) => {
      const sourceFilePath = path.join(sourceFolder, file);
      const destinationFilePath = path.join(destinationFolder, file);
      fs.copyFileSync(sourceFilePath, destinationFilePath);
    });
  } catch {
    throwError();
  }
};

await copy();
