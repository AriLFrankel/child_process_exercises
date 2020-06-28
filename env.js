const { spawn } = require("child_process");
const path = require("path");

// we can pass environment variables and working directory options to a child process
spawn("find . -type f | wc -l && pwd", {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    ANSWER: 42,
  },
  cwd: path.resolve(__dirname, ".."),
});
