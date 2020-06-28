const { spawn } = require("child_process");
const child = spawn("wc");
process.stdin.pipe(child.stdin);
child.stdout.pipe(process.stdout);
