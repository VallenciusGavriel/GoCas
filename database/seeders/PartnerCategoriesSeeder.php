<?php

namespace Database\Seeders;

use App\Models\PartnerCategory;
use Illuminate\Database\Seeder;

class PartnerCategoriesSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        PartnerCategory::create([
            'name' => 'Transportasi',
        ]);

        PartnerCategory::create([
            'name' => 'Pusat Perbelanjaan',
        ]);

        PartnerCategory::create([
            'name' => 'Kafe/Restaurant',
        ]);

        PartnerCategory::create([
            'name' => 'Supermarket',
        ]);
    }
}
