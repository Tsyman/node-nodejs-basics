import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const list = async () => {
  const folderPath = path.join(__dirname, "files");

  try {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    throwError();
  }
};

await list();
