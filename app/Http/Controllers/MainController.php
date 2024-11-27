<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Product;
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
            'show_count' => $locations->count(),
            'total_count' => Location::all()->count(),
            'station_count' => Location::all()->sum('total'),
            'meta' => [
                'title' => 'GoCas - Sewa Powerbank Terbaik',
                'description' => 'Lihat semua lokasi GoCas, menawarkan layanan sewa powerbank terbaik dengan pengiriman cepat dan harga terjangkau.',
            ],
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

    public function about()
    {
        return Inertia::render('About', [
            'meta' => [
                'title' => 'GoCas - Sewa Powerbank Terbaik',
                'description' => 'Tentang kami. GoCas menawarkan layanan sewa powerbank terbaik dengan pengiriman cepat dan harga terjangkau.',
            ],
        ]);
    }

    public function partnership()
    {
        return Inertia::render('Partnership', [
            'meta' => [
                'title' => 'GoCas - Sewa Powerbank Terbaik',
                'description' => 'Bekerja sama dengan GoCas, menawarkan layanan sewa powerbank terbaik dengan pengiriman cepat dan harga terjangkau.',
            ],
        ]);
    }

    public function products()
    {
        $products = Product::all();

        $meta = [
            'title' => 'GoCas - Sewa Powerbank dan Produk Lainnya',
            'description' => 'Temukan berbagai pilihan powerbank untuk disewa di GoCas. Produk berkualitas dengan harga terjangkau.',
        ];

        $schema = [
            "@context" => "https://schema.org",
            "@type" => "Product",
            "name" => $products->first->name,
            "image" => asset($products->first->image_url),
            "description" => $products->first->capacity,
            "brand" => [
                "@type" => "Brand",
                "name" => "GoCas"
            ],
            "offers" => [
                "@type" => "Offer",
                "price" => 5000,
                "priceCurrency" => "IDR",
                "availability" => "https://schema.org/InStock",
                "url" => url('/products')
            ]
        ];

        return Inertia::render('Products', compact('products', 'meta', 'schema'));
    }
}
