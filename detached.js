// we can run a child process detached from the parent in order to execute a long running background task

const { spawn } = require("child_process");
const child = spawn("node", ["timer.js"], {
  detached: true,
  stdio: "ignore",
});

child.unref();
