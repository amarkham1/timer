const stdin = process.stdin;
const stdout = process.stdout;
const exit = process.exit;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    stdout.write('Thanks for using me, ciao!\n');
    exit();
  } else if (key === 'b') {
    stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    stdout.write('Setting timer for ' + key + ' seconds\n');
    setTimeout(() => {
      stdout.write('\x07');
    }, key * 1000);
  }
});