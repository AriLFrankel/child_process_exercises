const { spawn } = require("child_process");

// spawn("find . -type f | wc  -l", {
//   shell: true,
// }).stdout.pipe(process.stdout);

// OR inherit the stdio from the parent and don't explicitly pipe to parent.stdout

spawn("find . -type f | wc  -l", {
  shell: true,
  stdio: "inherit",
});
