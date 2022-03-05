const { type } = require("express/lib/response");
const products = require("../Model/products");

exports.getAllProducts = (req, res) => {
  products
    .find()
    .then((response) => {
      res.status(200).json({
        message: "Products Fetched Succesfully",
        products: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getProductByCategory = (req, res) => {
  const { category } = req.params;
  products
    .find({ category: category })
    .then((response) => {
      res
        .status(200)
        .json({ message: "Products Fetched Successfully", products: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getProductBySub = (req, res) => {
  const { category, sub } = req.params;
  products
    .find({ category: category, sub: sub })
    .then((response) => {
      res
        .status(200)
        .json({ message: "Products Fetched Successfully", products: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.getProductById = (req, res) => {
  const { productId } = req.params;

  products
    .findById(productId)
    .then((response) => {
      res.status(200).json({
        message: "Restaurant Fetched Succesfully",
        product: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getProductByOffer = (req, res) => {
  products
    .find({ isOffer: true })
    .then((response) => {
      res
        .status(200)
        .json({ message: "Products Fetched Successfully", products: response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.productFilter = (req, res) => {
  let { category, sub, rating, lcost, hcost, sort } = req.body;
  sort = sort ? sort : 1;

  let filterObj = {};
  console.log(typeof lcost);
  sub && (filterObj["sub"] = sub);
  category && (filterObj["category"] = category);
  rating && (filterObj["rating"] = { $gte: rating });
  if (lcost !== undefined) {
    filterObj["originalPrice"] = { $gte: lcost, $lte: hcost };
  }

  console.log(filterObj);

  products
    .find(filterObj)
    .then((response) => {
      res.status(200).json({
        message: "Restaurants Fetched Succesfully",
        products: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
