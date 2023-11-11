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
    res.status(201).json({
      status: true,
      data: track,
      message: "Track created successfully!",
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
// get track by single id
const getTrack = async (req, res) => {
  try {
    const idNumber = req.params.idNumber;

    const track = await TrackModel.findOne({ idNumber });

    if (!track) {
      return res.status(404).json({ message: "Track not found" });
    }

    res.status(200).json({
        status: true,
        data: track,
        message: "Track get successfully!",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

const getTracksForUser = async (req, res) => {
  try {
    const id = req.params.id;

    // Assuming you have a function to fetch tracks by id in your TrackModel
    const tracks = await TrackModel.find({ id });

    if (tracks.length === 0) {
      return res
        .status(404)
        .json({ message: "No tracks found for the given user" });
    }

    res.status(200).json({
        status: true,
        data: tracks,
        message: "Tracks get successfully!",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createTrack,
  getTrack,
  getTracksForUser,
};
