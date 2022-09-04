const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.post("/favoriteNumber", (req, res) => {
  // mongoDB 에서 favorite 숫자 가져와서 프론트에 보내주기
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    // info 에는 movieId 에 해당하는 영화를 Favorite 리스트에 추가한 유저들의 리스트가 포함
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });

});

module.exports = router;
