'use strict'

const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('sessions', 'SessionController.store')

Route.post('new', 'UserController.store')
Route.get('show/:id', 'UserController.show')
Route.put('/update', 'UserController.update')
Route.delete('/destroy/:id', 'UserController.destroy')
Route.get('showAll', 'UserController.showAll')
Route.put('/desativarAcesso/:id', 'UserController.desativarAcesso')
Route.put('/ativarAcesso/:id', 'UserController.ativarAcesso')


