<?php

namespace App\Http\Controllers;

class SampleController extends Controller {
    public function test() {
        return response()->json([
            "data" => 'Hello, World!',
        ]);
    }
}
