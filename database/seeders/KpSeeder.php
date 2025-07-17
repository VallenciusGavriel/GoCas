<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kp;

class KpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kp::create([
            'content' => "
<h1>Hai Pengguna GoCas!</h1>
<p>Untuk melindungi hak dan kepentingan hukum kamu, mohon baca dan pahami <strong>“Ketentuan Pengembalian Power bank &amp; Pengembalian Dana”</strong> berikut ini.</p>

<h2>A. Batas Waktu Pengembalian Power Bank</h2>
<ul>
    <li>- Power bank wajib dikembalikan dalam waktu maksimal <strong>48 jam (2 hari)</strong> sejak waktu sewa.</li>
    <li>- Disarankan segera dikembalikan setelah pemakaian untuk menghindari biaya sewa tambahan per jam dan risiko keterlambatan.</li>
    <li>- Pengembalian di atas batas waktu akan dikenakan <strong>biaya keterlambatan</strong> dan/atau <strong>biaya penggantian unit</strong>.</li>
</ul>

<h2>B. Lokasi Pengembalian</h2>
<ul>
    <li>- Power bank dapat dikembalikan di <strong>stasiun GoCas mana saja</strong>, tidak wajib di lokasi awal peminjaman.</li>
    <li>- Pastikan power bank <strong>masuk sempurna ke slot</strong> pengembalian dan terdengar notifikasi suara <em>“pengembalian berhasil”</em>.</li>
</ul>

<h2>C. Kondisi Pengembalian</h2>
<p>Power bank harus dikembalikan dalam kondisi:</p>
<ul>
    <li>- Tidak rusak fisik</li>
    <li>- Kabel terpasang lengkap</li>
    <li>- Tidak terkena cairan atau terbakar</li>
</ul>
<p>Jika terdapat kerusakan atau kehilangan aksesoris, Anda dapat dikenakan biaya tambahan.</p>

<h2>D. Konfirmasi Pengembalian</h2>
<ul>
    <li>- Pastikan aplikasi GoCas menampilkan status <strong>Pengisian Daya Selesai</strong> setelah memasukkan power bank ke stasiun.</li>
    <li>- Simpan <strong>bukti pengembalian</strong> (screenshot atau notifikasi) sebagai dokumentasi pribadi jika diperlukan.</li>
</ul>

<h2>E. Biaya Keterlambatan & Kehilangan</h2>
<ul>
    <li>Jika power bank tidak dikembalikan dalam waktu 48 jam:
        <ul>
            <li>- Akan dianggap hilang</li>
            <li>- Dikenakan biaya penggantian penuh</li>
        </ul>
    </li>
    <li>- Anda akan menerima <strong>pesan pengingat melalui WhatsApp</strong> dan tidak dapat menyewa power bank baru sebelum mengembalikan.</li>
</ul>

<h2>F. Pengembalian Gagal atau Tidak Terbaca</h2>
<ul>
    <li>Jika stasiun tidak mendeteksi pengembalian:
        <ul>
            <li>- Coba slot lain di stasiun tersebut</li>
            <li>- Periksa jaringan internet Anda</li>
            <li>- Hubungi <strong>customer service</strong> melalui aplikasi GoCas</li>
        </ul>
    </li>
</ul>

<h2>G. Refund dan Pengembalian Dana</h2>
<ul>
    <li>- Umumnya, <strong>sisa deposit</strong> akan dipotong biaya sewa per jam dan di-<em>refund</em> otomatis ke e-wallet pengguna setelah power bank berhasil dikembalikan.</li>
    <li>- <strong>Biaya sewa yang sudah dibayarkan tidak dapat dikembalikan</strong>, kecuali terjadi kesalahan sistem atau gangguan teknis yang terbukti.</li>
</ul>"]);
    }
}
