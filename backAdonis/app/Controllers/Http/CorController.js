"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cors
 */
const Cor = use("App/Models/Cor");
class CorController {
  async create({ request }) {
    const dataCor = request.only(["descricao"]);
    const cor = await Cor.create(dataCor);
    return cor;
  }

  /**
   * Create/save a new cor.
   * POST cors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
}

module.exports = CorController;
