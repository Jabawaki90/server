const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// app.get("/api", (req, res) => {
//   res.json({ users: "user 1" });
//   res.send(200);
// });

app.get("/getData", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Hello Note project");
});
