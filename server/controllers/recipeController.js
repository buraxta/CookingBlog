require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

/*
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {


    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        // .sort({_id: -1}), belgelerin "_id" alanına göre azalan sırada sıralanması gerektiğini belirtir.
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = await Recipe.find({ 'category' : 'Thai'}).limit(limitNumber);
        const american = await Recipe.find({ 'category' : 'American'}).limit(limitNumber);
        const chinese = await Recipe.find({ 'category' : 'Chinese'}).limit(limitNumber);

        const food = { latest, thai, american, chinese};


        res.render("index", { title: "Cooking Blog - Home", categories, food});        
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



/*
 * GET /categories/:id
 * Categories By Id
 */
exports.exploreCategoriesByID = async (req, res) => {


    try {
      let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipe.find({'category': categoryId}).limit(limitNumber);
        res.render("categories", { title: "Cooking Blog - Categories", categoryById});        
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

};


/*
 * GET /recipe/:id
 * Recipe
 */

exports.exploreRecipe = async(req, res) => {
  try {
    let recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    res.render('recipe', {title: 'Cooking Blog - Recipe', recipe});
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured"});
  }
}