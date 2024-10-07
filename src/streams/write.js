import fs from "fs";
import path from "path";
import { __dirname } from "./constants.js";

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  process.stdin.on("error", (error) => {
    console.error(error);
  });
};

await write();
