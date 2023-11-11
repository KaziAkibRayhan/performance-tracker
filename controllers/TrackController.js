const TrackModel = require("../models/TrackSchema");

const createTrack = async (req, res) => {
  try {
    const { idNumber, interval, performance } = req.body;

    const image = req.file ? req.file.filename : undefined;

    const track = new TrackModel({
      idNumber,
      interval,
      performance,
      image,
    });
    await track.save();
    res.status(201).send({
      status: true,
      data: track,
      message: "Track created successfully!",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTrack,
};
