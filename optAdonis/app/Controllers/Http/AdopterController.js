'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with adopters
 */
const User = use('App/Models/Adopter')
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
  async register({request}) {
    const dataUser = request.only([
      "name",
    "date_birth",
    "household",
    "telephone",
    "id_gen",
    "id_estad",
    "description",
    "email",
    "password"]);
    const user = await User.create(dataUser);
    return user;
  }

  async authenticate({request, auth,response}) {
    const { email, password } = request.only(['email','password']);
    const token = await auth.attempt(email, password);
    return response.ok(token);
  }
  async store ({ request, response }) {
  }

  /**
   * Display a single adopter.
   * GET adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing adopter.
   * GET adopters/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update adopter details.
   * PUT or PATCH adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a adopter with id.
   * DELETE adopters/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AdopterController
