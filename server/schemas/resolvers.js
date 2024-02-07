const { signToken, AuthenticationError } = require("../utils/auth");
const { User, Item } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("shoppingCart");
    },
    items: async () => {
      return Item.find();
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
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
    addCart: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { shoppingCart: args.input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      return AuthenticationError;
    },
  },
};

module.exports = resolvers;
