<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoutingController extends Controller
{
    public function loginpage(){
        return Inertia::render('LoginPage');

    }
}
