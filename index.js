const express = require("express");
const cors = require("cors");
const notesRoute = require("./routes/notes");

require("./database");
const app = express();

app.use(cors());

app.use("/api/v1/notes", notesRoute);

app.listen(3001, () => {
  console.log("Hello Note project");
});
