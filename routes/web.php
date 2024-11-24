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
// Route::get('/storage-link', function () {
//     try {
//         Artisan::call('storage:link');
//         return "Symlink for storage created successfully!";
//     } catch (\Exception $e) {
//         return "Failed to create symlink: " . $e->getMessage();
//     }
// });

Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
    