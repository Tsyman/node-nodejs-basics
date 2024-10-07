import { spawn } from "child_process";
import path from "path";
import * as url from "url";

const spawnChildProcess = async (args) => {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const filePath = path.join(__dirname, "files", "script.js");
  const child = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", false]);
