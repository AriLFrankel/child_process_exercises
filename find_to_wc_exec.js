const { exec } = require("child_process");
// exec creates a shell unlike spawn so the pipe operator is available
// exec takes node style cb with buffered data rather than exposing a readable stream
exec("find . -type f | wc  -l", (err, data) => {
  if (err) {
    process.stderr.write(err);
  } else {
    process.stdout.write(data);
  }
});
