<?php

use Illuminate\Support\Facades\Route;

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

/**
 * Routes defined within the auth middleware expect that the user (or service) is authenticated.
 * Throws a 401 error if not authenticated
 */
Route::middleware("auth:api")->group(function () {
    Route::prefix("auth")->group(__DIR__ . "/api/auth.php");
});

Route::any("test", function () {
    return response()->json([
        "data" => "Hello World",
    ]);
});

Route::fallback(function () {
    return response()->json(
        [
            "message" =>
                "Page Not Found. If error persists, please contact your System Administrator",
        ],
        404
    );
});
