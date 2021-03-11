const expres = require("express");
const router = expres.Router();
const testJson = {
  name: "tempp",
  version: "1.0.0",
  description: "test",
  main: "index.js",
};
router.get("/", (req, res) => {
  res.json(testJson);
});
router.post("/", (req, res) => {
  res.send("testing");
});
module.exports = router;
