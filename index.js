const expres = require("express");
const userRoutes = require("./src/routes/users");
const main = () => {
  const app = expres();
  const port = 4000;
  app.use("/", expres.static("public"));
  app.use("/users", userRoutes);

  app.listen(port, () => {
    console.log("server started, listening on port", port);
  });
};

main();
