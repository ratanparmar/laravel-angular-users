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

Route::get('user','UserController@index')->middleware('cors');
Route::get('user/{id}','UserController@showUser')->middleware('cors');
Route::post('users','UserController@createUser')->middleware('cors');
Route::put('user/{id}','UserController@updateUser')->middleware('cors');
Route::delete('user/{id}','UserController@deleteUser')->middleware('cors');