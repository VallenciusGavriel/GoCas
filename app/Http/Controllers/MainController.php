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
        $ip = $request->ip();
        $currentUserInfo = \Stevebauman\Location\Facades\Location::get($ip);
        $center = $currentUserInfo ? [$currentUserInfo->latitude, $currentUserInfo->longitude] : ['-6.194920724627336', '106.8230702014363'];
        $lat = $center[0];
        $long = $center[1];

        $locations = Location::selectRaw(
            "*, ROUND(( 6371 * acos( cos( radians(?) ) * cos( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) 
                * cos( radians( CAST(longitude AS DECIMAL(10, 6)) ) - radians(?) ) + sin( radians(?) ) 
                * sin( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) ) ), 2) AS distance",
            [$lat, $long, $lat]
        )
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '>=', $south ?? $lat - 0.05)
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '<=', $north ?? $lat + 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '>=', $west ?? $long - 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '<=', $east ?? $long + 0.05)
            ->orderBy('distance')
            ->get();

        return Inertia::render('Location', [
            'locations' => $locations,
            'center' => $center,
        ]);
    }

    public function locationSearch(Request $request)
    {
        $data = $request->all();

        $lat = (float)$data['lat'];
        $long = (float)$data['long'];
        $north = isset($data['north']) ? (float)$data['north'] : null;
        $east = isset($data['east']) ? (float)$data['east'] : null;
        $south = isset($data['south']) ? (float)$data['south'] : null;
        $west = isset($data['west']) ? (float)$data['west'] : null;

        $locations = Location::selectRaw(
                "*, ROUND(( 6371 * acos( cos( radians(?) ) * cos( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) 
                * cos( radians( CAST(longitude AS DECIMAL(10, 6)) ) - radians(?) ) + sin( radians(?) ) 
                * sin( radians( CAST(latitude AS DECIMAL(10, 6)) ) ) ) ), 2) AS distance",
                [$lat, $long, $lat]
            )
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '>=', $south ?? $lat - 0.05)
            ->where(DB::raw('CAST(latitude AS DECIMAL(10, 6))'), '<=', $north ?? $lat + 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '>=', $west ?? $long - 0.05)
            ->where(DB::raw('CAST(longitude AS DECIMAL(10, 6))'), '<=', $east ?? $long + 0.05)
            ->orderBy('distance')
            ->get();


        return response()->json($locations);
    }
}
