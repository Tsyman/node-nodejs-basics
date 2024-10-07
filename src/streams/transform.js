import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("");
      callback(null, reversedText);
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
