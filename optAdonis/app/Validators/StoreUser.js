'use strict'
const {formatters}=use('validator')
class StoreUser {
  get rules () {
    return {
      // validation rules
      email:'required|email|max:100|unique:adopters,email',
      password:'required|max:20'
    }
  }
  get validateAll(){
    return true
  }
  get formatter(){
    return formatters.JsonApi
  }
}

module.exports = StoreUser
