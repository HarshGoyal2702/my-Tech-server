const mongoose = require("mongoose");
const { Schema } = mongoose;

const MenuSchema = new Schema(
  {
    name:{
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },
    description: String,
    image: String,
    category: String,
    price: Number,
  }
)

const Menu = mongoose.model("Menu",MenuSchema);

module.exports = Menu;
