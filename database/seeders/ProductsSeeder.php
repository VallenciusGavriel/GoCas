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
            'name' => 'Powerbank 6.0',
            'image_url' => '/products/powerbank60.png',
            'capacity' => '5000 MAh',
            'compatibility' => '5V 2.4A',
            'feature' => 'Type C & Lightning',
            'type' => 'Powerbank',
            'dimensi' => 'L(68) x T(18) x P(135) mm',
        ]);

        Product::create([
            'name' => 'Powerbank Station M6',
            'image_url' => '/products/powerbank-station-m6.png',
            'capacity' => '50w (6 Powerbank)',
            'compatibility' => '2.44Kg',
            'feature' => 'WiFi, 4G, Bluetootth, Audio',
            'type' => 'Machine',
            'dimensi' => 'L(263) x T(183) x P(271) mm',
        ]);

        Product::create([
            'name' => 'Powerbank Station M12',
            'image_url' => '/products/powerbank-station-m12.png',
            'capacity' => '150w (12 Powerbank)',
            'compatibility' => '3.9Kg',
            'feature' => 'WiFi, 4G, Bluetootth, Audio',
            'type' => 'Machine',
            'dimensi' => 'L(270) x T(180) x P(372) mm',
        ]);

        Product::create([
            'name' => 'Powerbank Station M30',
            'image_url' => '/products/powerbank-station-m30.png',
            'capacity' => '300w (30 Powerbank)',
            'compatibility' => '22.5Kg',
            'feature' => 'WiFi, 4G, Bluetootth, Audio',
            'type' => 'Machine',
            'dimensi' => 'L(360) x T(360) x P(1368) mm',
        ]);
    }
}
