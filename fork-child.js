process.on("message", (message) => {
  console.log("message from parent: ", message);
  if (message === "ping") {
    process.send("pong");
  }
});
