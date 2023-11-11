const express = require("express");
const { createTrack } = require("../controllers/TrackController");
const upload = require("../config/multerConfig");
const router = express.Router();

router.post("/track", upload.single("image"), createTrack);

module.exports = router;
