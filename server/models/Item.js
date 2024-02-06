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
    type: Integer,
    required: true,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;