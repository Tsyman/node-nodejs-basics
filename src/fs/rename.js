import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const rename = async () => {
  const oldFilePath = path.join(__dirname, "files", "wrongFilename.txt");
  const newFilePath = path.join(__dirname, "files", "properFilename.md");

  try {
    fs.renameSync(oldFilePath, newFilePath);
  } catch {
    throwError();
  }
};

await rename();
