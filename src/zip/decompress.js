import fs from "fs";
import path from "path";
import zlib from "zlib";
import { __dirname } from "./constants.js";

const decompress = async () => {
  const sourcePath = path.join(__dirname, "files", "archive.gz");
  const destinationPath = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(sourcePath);
  const gzip = zlib.createGunzip();
  const writeStream = fs.createWriteStream(destinationPath);

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("error", (error) => {
    console.error(error);
  });
};

await decompress();
