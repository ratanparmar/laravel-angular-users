<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('user','UserController@index');
Route::get('user/{id}','UserController@showUser');
Route::post('user','UserController@createUser');
Route::put('user/{id}','UserController@updateUser');
Route::delete('user/{id}','UserController@deleteUser');