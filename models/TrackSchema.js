const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  idNumber: {
    type: Number,
    required: true,
  },
  interval: {
    type: String,
    required: true,
  },
  performance: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const TrackModel = mongoose.model("Track", TrackSchema);
module.exports = TrackModel;
