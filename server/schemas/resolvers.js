const { signToken, AuthenticationError } = require("../utils/auth");
const { User, Item } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("shoppingCart");
    },
    user: async (_parent, { _id }) => {
      return User.findById(_id);
    },
    items: async () => {
      return Item.find();
    },
    item: async (parent, { itemId }) => {
      return Item.findOne({ _id: itemId });
    },
  },

  Mutation: {
    addUser: async (_parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCart: async (_parent, args, context) => {
      if (context.user) {
        const itemToAdd = await Item.findById(args);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { shoppingCart: args._id } },
          { new: true, runValidators: true }
        );
        console.log(updatedUser);
        return updatedUser;
      }
      return AuthenticationError;
    },
    removeFromCart: async (_parent, args, context) => {
      if (context.user) {
        // console.log(args); Test to see what args are being passed
        const updatedUser = await User.findOneAndUpdate(
          { _id: args._id },
          { $pull: { shoppingCart: args.itemID } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      return AuthenticationError;
    },
  },
};

module.exports = resolvers;
