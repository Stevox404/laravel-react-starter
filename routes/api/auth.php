<?php

use App\Http\Controllers\SampleController;
use Illuminate\Support\Facades\Route;

Route::controller(SampleController::class)->group(function () {
    Route::withoutMiddleware("auth:api")->group(function () {
        Route::post("login", "test");
        Route::post("otp", "test");
        Route::post("register", "test");
        Route::post("forgot-password", "test");
    });

    Route::get("user", "test");
    Route::put("password", "test");
    Route::put("profile", "test");
    Route::any("logout", "test");
});
