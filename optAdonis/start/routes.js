'use strict'

const AdopterController = require('../app/Controllers/Http/AdopterController')
const AnimalController = require('../app/Controllers/Http/AnimalController')
const ColorController = require('../app/Controllers/Http/ColorController')
const GenderController = require('../app/Controllers/Http/GenderController')
const RaceController = require('../app/Controllers/Http/RaceController')
const SexController = require('../app/Controllers/Http/SexController')
const StatusController = require('../app/Controllers/Http/StatusController')
const TypeAnimalController = require('../app/Controllers/Http/TypeAnimalController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/gender', 'GenderController.create')
Route.post('/status', 'StatusController.create')
Route.post('/register', 'AdopterController.register').validator('StoreUser')
Route.post('/authenticate', 'AdopterController.authenticate')
Route.post('/type', 'TypeAnimalController.create')
Route.post('/race', 'RaceController.create')
Route.post('/color', 'ColorController.create')
Route.post('/sex', 'SexController.create')
Route.post('/animal', "AnimalController.create")
Route.group(()=>{Route.resource('/animals', "AnimalController").except("store")})
Route.post('/admin', 'AdminController.registerAdmin')