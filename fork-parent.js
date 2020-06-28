const { fork } = require("child_process");

const child = fork("fork-child.js");
child.on("message", (message) => {
  console.log("message from child: ", message);
});
child.send("ping");
