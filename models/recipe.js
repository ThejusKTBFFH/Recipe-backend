const mongose = require("mongoose");

const recipeSchema = new mongoose.Schema({

    title:{type :String  },
    author: {type: String},
    image:{ type: String},
    ingredients:{type : String},

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }


},{timestamps: true})

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;