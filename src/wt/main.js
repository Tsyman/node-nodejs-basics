import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";
import * as url from "url";

const performCalculations = async () => {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const filePath = path.join(__dirname, "worker.js");
  const cpuLength = cpus().length;
  const workers = Array.from({ length: cpuLength });
  const results = [];

  const createWorker = (index) => {
    return new Promise((resolve) => {
      const worker = new Worker(filePath, { workerData: index + 10 });

      worker.on("message", (message) => {
        results[index] = message;
        resolve();
      });

      worker.on("error", () => {
        results[index] = { status: "error", data: null };
        resolve();
      });

      workers[index] = worker;
    });
  };

  await Promise.all(workers.map((_, index) => createWorker(index)));

  console.log(results);
};

await performCalculations();
