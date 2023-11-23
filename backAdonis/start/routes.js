'use strict'

const AdotanteController = require('../app/Controllers/Http/AdotanteController')
const AuthController = require('../app/Controllers/Http/AuthController')
const CorController = require('../app/Controllers/Http/CorController')
const EstadoController = require('../app/Controllers/Http/EstadoController')
const GeneroController = require('../app/Controllers/Http/GeneroController')
const RacaController = require('../app/Controllers/Http/RacaController')
const TipoAnimalController = require('../app/Controllers/Http/TipoAnimalController')

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

Route.post('/genero', 'GeneroController.create')
Route.post('/estado', 'EstadoController.create')
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.post('/ReAdotante', 'AdotanteController.create')
Route.post('/tipo', 'TipoAnimalController.create')
Route.post('/raca', 'RacaController.create')
Route.post('/cor', 'CorController.create')

