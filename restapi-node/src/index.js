const app = require("./app");

(async () => {
  await app.listen(3000);
  console.log("server on port 3000");
})();
