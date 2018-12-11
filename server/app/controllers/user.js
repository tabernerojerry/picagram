import models from "../models";

export default {
  signUp: async input => {
    await models.User.create(input);

    return "User created!";
  }
};
