'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')



class Adopter extends Model {
    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (adopterInstance) => {
          if (adopterInstance.dirty.password) {
            adopterInstance.password = await Hash.make(adopterInstance.password);
          }
        });
      }
    
      /**
       * A relationship on tokens is required for auth to
       * work. Since features like `refreshTokens` or
       * `rememberToken` will be saved inside the
       * tokens table.
       *
       * @method tokens
       *
       * @return {Object}
       */
      tokens () {
        return this.hasMany('App/Models/Tokken')
      }
      adopterAdoption(){
        return this.hasMany('App/Models/Adoption')
      }
}

module.exports = Adopter
