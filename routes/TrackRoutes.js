const express = require("express");
const { createTrack, getTrack, getTracksForUser } = require("../controllers/TrackController");
const upload = require("../config/multerConfig");
const router = express.Router();

router.post("/track", upload.single("image"), createTrack);

// a single track by ID
router.get("/track/:idNumber", getTrack);
// get user id by track
router.get("/tracks/:idNumber", getTracksForUser);


module.exports = router;
