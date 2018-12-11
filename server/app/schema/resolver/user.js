import controllers from "../../controllers";

export default {
  Query: {
    hello: () => "Hello Jerry"
  },
  Mutation: {
    signUp: async (_, { input }) => await controllers.user.signUp(input)
  }
};
