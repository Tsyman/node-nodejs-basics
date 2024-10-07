import fs from "fs";
import path from "path";
import { __dirname, throwError } from "./constants.js";

const create = async () => {
  const folderPath = path.join(__dirname, "files");
  const filePath = path.join(folderPath, "fresh.txt");

  try {
    if (fs.existsSync(filePath)) {
      throwError();
    }

    const content = "I am fresh and young";
    fs.writeFileSync(filePath, content);
  } catch {
    throwError();
  }
};

await create();
