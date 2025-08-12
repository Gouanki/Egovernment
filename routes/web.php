<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\HomeController as ControllersHomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


//Clients routes : All route related to the client are located here
// Home
Route::get('/', [HomeController::class, 'index'])->name('client.home');
// serices
Route::get('/services', [ServiceController::class, 'index'])->name('client.services');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
