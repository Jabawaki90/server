const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ashraf_note_project:x3bmnUx5CB2T3Du5@cluster0.8pccxkf.mongodb.net/Note_List_DB"
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
