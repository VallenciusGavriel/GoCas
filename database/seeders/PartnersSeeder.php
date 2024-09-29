<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnersSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Partner::create([
            'name' => 'MRT Jakarta',
            'image_url' => '/partner/mrt-jakarta.jpg',
            'category_id' => 1,
        ]);

        Partner::create([
            'name' => 'TransJakarta',
            'image_url' => '/partner/transjakarta.jpg',
            'category_id' => 1,
        ]);

        Partner::create([
            'name' => 'PT KAI',
            'image_url' => '/partner/pt-kai.jpg',
            'category_id' => 1,
        ]);

        Partner::create([
            'name' => 'Grand Indonesia',
            'image_url' => '/partner/grand-indonesia.jpg',
            'category_id' => 2,
        ]);

        Partner::create([
            'name' => 'Central Park',
            'image_url' => '/partner/central-park.jpg',
            'category_id' => 2,
        ]);

        Partner::create([
            'name' => 'Puri Indah Mall',
            'image_url' => '/partner/puri-indah-mall.jpg',
            'category_id' => 2,
        ]);

        Partner::create([
            'name' => 'Yoshinoya',
            'image_url' => '/partner/yoshinoya.jpg',
            'category_id' => 3,
        ]);

        Partner::create([
            'name' => 'KFC',
            'image_url' => '/partner/kfc.jpg',
            'category_id' => 3,
        ]);

        Partner::create([
            'name' => 'AEON Supermarket',
            'image_url' => '/partner/aeon-supermarket.jpg',
            'category_id' => 4,
        ]);

        Partner::create([
            'name' => 'Superindo',
            'image_url' => '/partner/superindo.jpg',
            'category_id' => 4,
        ]);
    }
}
