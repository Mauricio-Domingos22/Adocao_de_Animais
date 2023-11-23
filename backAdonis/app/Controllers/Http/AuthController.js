"use strict";
const User = use("App/Models/User");
class AuthController {
  async register({request}) {
    const dataUser = request.only(["email","password"]);
    const user = await User.create(dataUser);
    return user;
  }

  async authenticate({request, auth}) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;
