import * as url from "url";

const ERROR_MESSAGE = "FS operation failed";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const throwError = () => {
  throw new Error(ERROR_MESSAGE);
};

export { throwError, __dirname };
