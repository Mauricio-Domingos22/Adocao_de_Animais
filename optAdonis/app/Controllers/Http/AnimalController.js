"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with animals
 */
const Animal = use("App/Models/Animal");
class AnimalController {
  /**
   * Show a list of all animals.
   * GET animals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const animal = await Animal.all();
    return animal
  }

  /**
   * Render a form to be used for creating a new animal.
   * GET animals/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request,response }) {
    const dataAnimal = request.only([
      "name",
      "sex",
      "age",
      "height",
      "weight",
      "race",
      "type_animal",
      "color",
      "about_animal"
    ]);
    const Route = use('Route');
    const Helpers = use('Helpers')

Route.post('upload', async ({ request }) => {
  const profilePic = request.file('photograph', {
    types: ['image'],
    size: '2mb'
  })

  await profilePic.move(Helpers.tmpPath('uploads'), {
    name: 'custom-name.jpg',
    overwrite: true
  })

  if (!profilePic.moved()) {
    return profilePic.error()
  }
  return 'File moved'
})
  
    const animal = await Animal.create(dataAnimal);
    return animal;
  }

  /**
   * Create/save a new animal.
   * POST animals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
 
  async show({ params}) {
    const animal = await Animal.findOrFail(params.id)
    return animal
  }



  /**
   * Update animal details.
   * PUT or PATCH animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a animal with id.
   * DELETE animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const animal = await Animal.findOrFail(params.id)
    await animal.delete()

  // if(animal.user_id != auth.user_id){
  //   return response.status(401)
  // }
   
  }
}

module.exports = AnimalController;
