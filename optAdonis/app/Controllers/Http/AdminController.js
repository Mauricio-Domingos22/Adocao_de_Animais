'use strict'
const Admin = use('App/Models/User')
class AdminController {
    async registerAdmin({request,response}) {
      try{
        const dataAdmin = request.only(["email","password","name"]);
        const admin = await Admin.create(dataAdmin);
        return admin;

      }catch(error){
        console.log(error)
        return respose.status(500).send({error:'Erro duarate o Registo'})
      }
      
      }
      //auteticar usuário
      async authenticate({request, auth,response}) {
        try{
          const { email, password } = request.all();
          const token = await auth.attempt(email, password);
          return token;
        }catch(error){
          console.log(error)
          return response.status(401).send({error:'Credenciais Inválidas.'})
        }
       
      }
}

module.exports = AdminController
