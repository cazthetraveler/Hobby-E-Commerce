const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  id: {
    type: String,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
  },
  category: {
    type: Array,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
