<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Faq::create([
            'question' => 'Apa itu GoCas?',
            'answer' => '<p>GoCas adalah layanan penyewaan power bank. Anda cukup membuka aplikasi GoCas, mencari GoCas Station terdekat, dan menyewa/mengembalikan power bank hanya dengan beberapa ketukan.</p>',
        ]);

        Faq::create([
            'question' => 'Bagaimana cara menemukan stasiun penyewaan GoCas?',
            'answer' => '<p>Buka aplikasi GoCas dan gunakan fitur pencarian untuk menemukan stasiun penyewaan GoCas terdekat dari lokasi Anda.</p>',
        ]);

        Faq::create([
            'question' => 'Bagaimana cara menyewa/mengembalikan power bank GoCas?',
            'answer' => '<p>Sangat mudah! Cukup buka aplikasi GoCas, cari lokasi GoCas Station terdekat atau scan barcode yang tersedia di mesin, kemudian Login , dan sewa/kembalikan power bank hanya dengan beberapa ketukan.</p>',
        ]);
    }
}
