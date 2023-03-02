<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoutingController extends Controller
{
    public function loginpage(){
        return Inertia::render('LoginPage');

    }
    public function home(){
        return Inertia::render('Home');
    }
    function registerpage(){
        return Inertia::render('Register');
    }
}
