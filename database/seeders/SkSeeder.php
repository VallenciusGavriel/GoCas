<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sk;

class SkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         Sk::create([
            'content' => '
                <p><strong>HARAP MEMBACA PERSYARATAN INI DENGAN SEKSAMA SEBELUM MENGAKSES ATAU MENGGUNAKAN LAYANAN.</strong></p>
                <p>Ketentuan Penggunaan ini (“Ketentuan”) mengatur akses atau penggunaan oleh Anda, seorang individu, dari negara manapun di dunia terhadap aplikasi, situs web, konten, produk, dan layanan (“Layanan”) yang disediakan oleh GoCas (“Perusahaan”).</p>
                <p>Akses dan penggunaan Layanan oleh Anda merupakan persetujuan Anda untuk terikat dengan Ketentuan ini, yang membentuk hubungan kontraktual antara Anda dan Perusahaan. Jika Anda tidak menyetujui Ketentuan ini, Anda tidak dapat mengakses atau menggunakan Layanan. Perusahaan dapat segera mengakhiri Ketentuan ini atau Layanan apa pun sehubungan dengan Anda, atau secara umum berhenti menawarkan atau menolak akses ke Layanan atau bagian mana pun daripadanya, kapan saja dengan alasan apa pun.</p>
            ',
        ]);
    }
}
