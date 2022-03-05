const offers = require("../Model/offers");

exports.getCarousel = (req, res) => {
  offers
    .find({ carousel: true })
    .then((response) => {
      res.status(200).json({
        message: "Carousel items Fetched Successfully",
        offers: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getNonCarousel = (req, res) => {
  offers
    .find({ carousel: false })
    .then((response) => {
      res.status(200).json({
        message: "Carousel items Fetched Successfully",
        offers: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
