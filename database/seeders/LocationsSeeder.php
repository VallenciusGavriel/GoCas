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
            'latitude' => '-6.256727537620611',
            'longitude' => '106.61830320641677',
            'status' => 'ONLINE',
        ]);

        Location::create([
            'name' => 'Summarecon Mall Serpong',
            'address_detail' => 'Jalan Boulevard Gading Serpong, Pakulonan Barat, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.2426173',
            'longitude' => '106.6258199',
            'status' => 'ONLINE',
        ]);

        Location::create([
            'name' => 'Pradita University',
            'address_detail' => 'Jalan Gading Serpong Boulevard, Pakulonan Barat, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '07:00 - 17:00 WIB',
            'latitude' => '-6.2433361',
            'longitude' => '106.6280314',
            'status' => 'ONLINE',
        ]);

        Location::create([
            'name' => 'Scientia Digital Center',
            'address_detail' => 'Jalan Scientia Boulevard, Gading Serpong, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.256937',
            'longitude' => '106.618735',
            'status' => 'ONLINE',
        ]);
    }
}
