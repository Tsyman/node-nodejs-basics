import fs from "fs";
import path from "path";
import { __dirname } from "./constants.js";

const read = async () => {
  const filePath = path.join(__dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(filePath);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (error) => {
    console.log(error);
  });
};

await read();
