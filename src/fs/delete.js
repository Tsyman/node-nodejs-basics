import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const remove = async () => {
  const fileToRemovePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    fs.unlinkSync(fileToRemovePath);
  } catch (err) {
    throwError();
  }
};

await remove();
