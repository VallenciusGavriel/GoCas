<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::fallback(function () {
    return redirect('/');
});

require __DIR__.'/auth.php';
