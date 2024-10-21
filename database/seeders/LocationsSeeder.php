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
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Summarecon Mall Serpong',
            'address_detail' => 'Jalan Boulevard Gading Serpong, Pakulonan Barat, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.240722084396005',
            'longitude' => '106.62889629846687',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Pradita University',
            'address_detail' => 'Jalan Gading Serpong Boulevard, Pakulonan Barat, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '07:00 - 17:00 WIB',
            'latitude' => '-6.259938811536098',
            'longitude' => '106.61837692698464',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Scientia Digital Center',
            'address_detail' => 'Jalan Scientia Boulevard, Gading Serpong, Kelapa Dua, Kabupaten Tangerang, Banten 15810',
            'province' => 'Banten',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.256688254839604',
            'longitude' => '106.61644832360032',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Sarinah',
            'address_detail' => 'Jalan MH Thamrin No. 11, RT.8/RW.4, Gondangdia, Menteng, Jakarta Pusat, DKI Jakarta 10350',
            'province' => 'DKI Jakarta',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.191548',
            'longitude' => '106.823377',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Gelora Bung Karno (GBK)',
            'address_detail' => 'Jalan Pintu Satu Senayan, Gelora, Tanah Abang, Jakarta Pusat, DKI Jakarta 10270',
            'province' => 'DKI Jakarta',
            'operational_hours' => '05:00 - 22:00 WIB',
            'latitude' => '-6.218483',
            'longitude' => '106.799674',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Monumen Nasional (Monas)',
            'address_detail' => 'Gambir, Jakarta Pusat, DKI Jakarta 10110',
            'province' => 'DKI Jakarta',
            'operational_hours' => '08:00 - 16:00 WIB',
            'latitude' => '-6.175392',
            'longitude' => '106.827153',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Bundaran HI',
            'address_detail' => 'Jalan MH Thamrin, Jakarta Pusat, DKI Jakarta 10350',
            'province' => 'DKI Jakarta',
            'operational_hours' => '24 hours',
            'latitude' => '-6.195083',
            'longitude' => '106.822782',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Mall Taman Anggrek',
            'address_detail' => 'Jalan Letjen S. Parman Kav. 21, Slipi, Jakarta Barat, DKI Jakarta 11470',
            'province' => 'DKI Jakarta',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.178306',
            'longitude' => '106.790248',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Blok M Plaza',
            'address_detail' => 'Jalan Sultan Hasanudin No. 1, RT.3/RW.1, Melawai, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160',
            'province' => 'DKI Jakarta',
            'operational_hours' => '10:00 - 22:00 WIB',
            'latitude' => '-6.244177',
            'longitude' => '106.799019',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);

        Location::create([
            'name' => 'Kota Tua Jakarta',
            'address_detail' => 'Pinangsia, Taman Sari, Jakarta Barat, DKI Jakarta 11110',
            'province' => 'DKI Jakarta',
            'operational_hours' => '24 hours',
            'latitude' => '-6.135200',
            'longitude' => '106.813301',
            'status' => 'ONLINE',
            'apple' => 6,
            'type_c' => 4,
            'type_b' => 4,
        ]);
    }
}
