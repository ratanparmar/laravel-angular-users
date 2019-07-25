<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index(){
        return User:: all();
    }

    public function showUser($id){
        return User:: find($id);
    }
    public function createUser(Request $request){
        echo $request;
        return User::create($request->all());
    }
    public function updateUser(Request $request,$id){
        $user = User::findOrFail($id);
        $user->update($request->all());
        return $user;
    }
    public function deleteUser($id){
        $user = User::findOrFail($id);
        $user->delete();
        return 204;
    }
}
