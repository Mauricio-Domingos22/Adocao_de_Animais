"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with administradors
 */
const Administrador = use("App/Models/Administrador");
class AdministradorController {
  async create({ request }) {
    const dataAd = request.only(["nome"]);
    const admin = await Administrador.create(dataAd);
    return admin;
  }

  /**
   * Create/save a new administrador.
   * POST administradors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
}

module.exports = AdministradorController;
