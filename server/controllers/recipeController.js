require("../models/database");
const Category = require("../models/Category");

/*
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {


    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.render("index", { title: "Cooking Blog - Home", categories});        
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

};
/*
 * GET /categories
 * Categories
 */
exports.exploreCategories = async (req, res) => {


    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render("categories", { title: "Cooking Blog - Categories", categories});        
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

};


