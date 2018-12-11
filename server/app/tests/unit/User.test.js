import models from "../../models";

process.env.TEST_SUITE = "picgram-user-test";

describe("User", () => {
  test("can create a user", async () => {
    const data = {
      email: "john@test.com",
      firstName: "John",
      lastName: "Doe",
      password: "123456"
    };

    await models.User.create(data);

    const user = await models.User.findOne({ email: data.email });

    expect(user.email).toEqual(data.email);
  });
});
