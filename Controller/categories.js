const categories = require("../Model/categories")

exports.getCategories= (req, res) => {
    categories.find()
        .then(response => {
            res.status(200).json({ message: "Locations Fetched Succesfully", categories: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}