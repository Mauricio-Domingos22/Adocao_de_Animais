'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Animal extends Model {
    
   animalAdoptions(){
    return this.belongsTo('App/Models/Adoption')
   } 
}

module.exports = Animal
