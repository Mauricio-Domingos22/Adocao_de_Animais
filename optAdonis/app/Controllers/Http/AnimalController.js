"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with animals
 */
const Animal = use("App/Models/Animal");
const Helpers = use("Helpers");
const payoad = [
  "name",
  "sex",
  "age",
  "height",
  "weight",
  "race",
  "type_animal",
  "color",
  "about_animal",
];
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
  async index({ response }) {
    try {
      const animal = await Animal.all();
      return animal;
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .send({ error: "Ocorreu um erro ao buscar os animais" });
    }
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
  async create({ request, response }) {
    try {
      const dataAnimal = request.all();
      const animalPicture = request.file("photograph");

      dataAnimal.photograph =
        new Date().getTime() + "." + animalPicture.subtype;
      await animalPicture.move(Helpers.publicPath("upload"), {
        name: dataAnimal.photograph,
      });

      const animal = await Animal.create(dataAnimal);
      return animal;
    } catch (error) {
      console.error(error);
      return response.status(500).send({ error: "Erro duarate o Registo" });
    }
  }

  /**
   * Create/save a new animal.
   * POST animals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async show({ params, response }) {
    try {
      const animal = await Animal.findOrFail(params.id);
      return animal;
    } catch (error) {
      console.error(error);

      if (error.name === "ModelNotFoundException") {
        return response.status(404).send({ error: "Animal não encontrado" });
      }
      return response
        .status(500)
        .send({ error: "Ocorreu um erro ao buscar o animal" });
    }
  }

  /**
   * Update animal details.
   * PUT or PATCH animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  /**
   * Delete a animal with id.
   * DELETE animals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, response }) {
    try{
      const animal = await Animal.findOrFail(params.id);
      await animal.delete();
   return response.status(204).send()
    }catch(error){
      console.error(error)
     if(error.name === "ModelNotFoundException"){
      return response.status(500).send({error:'Ocorreu um erro ao excluir o animal'})
     }

    }
 
  }

  //Editar Aimal
  async update({ params,request,response }) {
    try{
      const animal = await Animal.findOrFail(params.id)
      const data = request.only(['name',
      'sex',
      'age',
      'height',
      'weight',
      'race',
      'type_animal',
      'color',
      'about_animal',
     ' photograph'
    ])
    animal.merge(data)
    await animal.save()

return response.status(200).send(animal)

    }catch(error){
   console.error(error)
    if(error.name === 'ModelNotFoundException'){
      return response.status(404).send({error:'Animal não encontrado'})
    }
    return response.status(500).send({ error: 'Ocorreu um erro ao editar o animal.' });
    }
    

  }
}

module.exports = AnimalController;
