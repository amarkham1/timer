const timer = array => {
  for (const index in array) {
    if (!isNaN(Number(array[index])) && array[index] >= 0) {
        setTimeout(() => {
          console.log(arguments[index] + " seconds");
          process.stdout.write('\x07');
        }, arguments[index] * 1000);
    }
  }
}

const arguments = process.argv.slice(2);
timer(arguments);