const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const game = req.body.searchGame;
  const apiKey = "cba0c3b901mshc8ba640ddafba48p1b1cacjsnced7a6f14e4b";

  const options = {
    method: "GET",
    url: "https://steam2.p.rapidapi.com/search/" + game + "/page/1?rapidapi-key=" + apiKey + "&rapidapi-host=steam2.p.rapidapi.com",
  };

  try {
    const response = await axios.request(options);
    const results = response.data.map((result) => ({
      name: result.name,
      img: result.imgUrl,
      info: result.url,
    }));
    res.render("result", { game: game, results: results.slice(0, 6) });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
