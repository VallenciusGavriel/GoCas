<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Location::create([
            'name' => 'Universitas Multimedia Nusantara',
            'address_detail' => 'Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '09:00 - 21:00 WIB',
            'latitude' => '-6.256727537620611, ',
            'longitude' => '106.61830320641677',
            'status' => 'ONLINE',
        ]);
    }
}
