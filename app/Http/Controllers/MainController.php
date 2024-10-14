<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    public function location(Request $request): Response
    {
        $locations = Location::all();

        return Inertia::render('Location', [
            'locations' => $locations
        ]);
    }

    public function locationSearch(Request $request)
    {
        $data = $request->all();

        $lat = (float)$data['lat'];
        $long = (float)$data['long'];

        $locations = Location::selectRaw(
                "*, ROUND(( 6371 * acos( cos( radians(?) ) * cos( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) 
                * cos( radians( CAST(longitude AS DECIMAL(10, 6)) ) - radians(?) ) + sin( radians(?) ) 
                * sin( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) ) ), 2) AS distance",
                [$lat, $long, $lat]
            )
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '>=', $lat - 0.05)
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '<=', $lat + 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '>=', $long - 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '<=', $long + 0.05)
            ->orderBy('distance')
            ->get();


        return response()->json($locations);
    }
}