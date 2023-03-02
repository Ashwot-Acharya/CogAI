<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RoutingController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => 330,
        'phpVersion' => 123.12,
    ]);
});

Route::get('/login',[RoutingController::class , 'loginpage'])->name('loginpage');
Route::get('/', [RoutingController::class, 'home'])->name('homepage');
Route::get('/register',[RoutingController::class,'registerpage'])->name('registerpage');
