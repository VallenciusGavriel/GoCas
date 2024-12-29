<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', [MainController::class, 'about']);
Route::get('/location', [MainController::class, 'location']);
Route::get('/location-search', [MainController::class, 'locationSearch']);
Route::get('/partnership', [MainController::class, 'partnership']);
Route::get('/products', [MainController::class, 'products']);

// Jangan lupa dihide kalau uda dijalanin
Route::get('/start-ssr', function () {
    try {
        Artisan::call('inertia:start-ssr');
        return response()->json([
            'message' => 'Inertia SSR server started successfully!',
            'output' => Artisan::output(),
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Failed to start Inertia SSR server: ' . $e->getMessage(),
        ]);
    }
});


Route::fallback(function () {
    return redirect('/');
});
    