<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Powerbank',
            'image_url' => '/product/powerbank.jpg',
            'capacity' => '5000 MAh',
            'compatibility' => 'Apple Lighning, Android Micro USB, USB Type C',
            'feature' => 'Kemampuan Fast Charging hingga 2 kali pengisian penuh',
            'type' => 'Powerbank',
            'dimensi' => 'L(76) x T(16) x P(135) mm, Berat 130 gr',
        ]);

        Product::create([
            'name' => 'Recharge Station Large',
            'image_url' => '/product/recharge-station-large.jpg',
            'capacity' => '30 slot powerbank',
            'compatibility' => 'Terpasang adaptor pengisian daya Android dan IOS',
            'feature' => '100W saat idle, 52W max, est. IDR 150K per month*',
            'type' => 'Machine',
            'dimensi' => 'L(732) x T(2130) x P(500) mm dengan 43 inch Layar Sentuh',
        ]);

        Product::create([
            'name' => 'Recharge Station Medium',
            'image_url' => '/product/recharge-station-medium.jpg',
            'capacity' => '16 slot powerbank',
            'compatibility' => 'Terpasang adaptor pengisian daya Android dan IOS',
            'feature' => '30W saat idle, 230W max',
            'type' => 'Machine',
            'dimensi' => 'L(360) x T(1940) x P(360) mm dengan 14.3 inch Layar Sentuh',
        ]);

        Product::create([
            'name' => 'Recharge Station Small',
            'image_url' => '/product/recharge-station-small.jpg',
            'capacity' => '8 slot powerbank',
            'compatibility' => 'Terpasang adaptor pengisian daya Android dan IOS',
            'feature' => '110W saat idle, 110W max',
            'type' => 'Machine',
            'dimensi' => 'L(270) x T(286) x P(310) mm',
        ]);
    }
}
