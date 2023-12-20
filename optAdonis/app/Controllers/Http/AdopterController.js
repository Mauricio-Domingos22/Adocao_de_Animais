"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with adopters
 */
const Hash = use("Hash");
const User = use("App/Models/Adopter");
class AdopterController {
  /**
   * Show a list of all adopters.
   * GET adopters
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async register({ request, response }) {
    try {
      const dataUser = request.only([
        "name",
        "date_birth",
        "household",
        "telephone",
        "id_gen",
        "id_estad",
        "description",
        "email",
        "password",
      ]);
      const user = await User.create(dataUser);
      return user;
    } catch (error) {
      console.error(error);
      return response.status(500).send({ error: "Erro duarate o Registo" });
    }
  }

  async authenticate({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const adopter = await User.findBy("email", email.toLowerCase());

      if (adopter && (await Hash.verify(password, adopter.password))) {
        return "Autenticação bem-sucedida";
      }
    } catch (error) {
      console.error(error);
      return response.status(401).send({ error: "Credenciais Inválidas." });
    }
  }
  async store({ request, response }) {}

  /**
   * Display a single adopter.
   * GET adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing adopter.
   * GET adopters/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update adopter details.
   * PUT or PATCH adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a adopter with id.
   * DELETE adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = AdopterController;
