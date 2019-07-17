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

Route::group(['middleware' => 'cors'], function() {
    Route::get('user','UserController@index');
});

Route::group(['middleware' => 'cors'], function() {
    Route::get('user/{id}','UserController@showUser');
});

Route::group(['middleware' => 'cors'], function() {    
    Route::post('user','UserController@createUser');
});
Route::group(['middleware' => 'cors'], function() {
        Route::put('user/{id}','UserController@updateUser');
    });
Route::group(['middleware' => 'cors'], function() {        
Route::delete('user/{id}','UserController@deleteUser');
});