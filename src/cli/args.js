const parseArgs = () => {
  const args = process.argv.slice(2);

  const parsedArguments = Object.fromEntries(
    args
      .map((arg, index) => {
        if (index % 2 === 0) {
          const propName = arg.replace("--", "");
          const propValue = args[index + 1];
          return [propName, propValue];
        }
      })
      .filter(Boolean)
  );

  Object.entries(parsedArguments).forEach(([propName, propValue]) => {
    console.log(`${propName} is ${propValue}`);
  });
};

parseArgs();
