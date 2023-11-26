'use strict'
const Admin = use('App/Models/User')
class AdminController {
    async registerAdmin({request}) {
        const dataAdmin = request.only(["email","password","name"]);
        const admin = await Admin.create(dataAdmin);
        return admin;
      }
    
      async authenticate({request, auth}) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
      }
}

module.exports = AdminController
