const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.Number,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  content: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model("notesList", NoteSchema);
