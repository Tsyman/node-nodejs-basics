import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    console.log(fileContent);
  } catch (error) {
    throwError();
  }
};

await read();
