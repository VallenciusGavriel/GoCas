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

         Faq::create([
            'question' => 'Berapa sih biaya sewa powerbank GoCas?',
            'answer' => '<p>Biayanya terjangkau banget kok!</p>
            <ul>
                <li>- Cuma Rp5.000/jam*</li>
                <li>- Gratis 3 menit pertama, jadi kamu bisa coba dulu tanpa khawatir</li>
                <li>- Maksimal bayar Rp45.000/24 jam, meskipun kamu pakai seharian.</li>
            </ul>
            <p><em>*Mohon cek terlebih dahulu detail tarif di aplikasi sebelum menyewa.</em></p>',
        ]);

        Faq::create([
            'question' => 'Berapa lama saya bisa menyewa power bank?',
            'answer' => '<p>Sewa sesuai kebutuhan Anda hingga maksimal 24 jam. Perlu diingat, power bank GoCas hanya dapat diisi ulang di GoCas Station.</p>',
        ]);

        Faq::create([
            'question' => 'Apakah power bank GoCas aman untuk semua smartphone?',
            'answer' => '<p>Yes, pastinya! Karena GoCas sudah mempunyai sertifikasi seperti CE, CCC, dan CB. Power bank GoCas sudah dilengkapi dengan kabel USB Type-C dan Lightning type, jadi cocok banget untuk hampir semua jenis smartphone — termasuk Android dan iPhone. Aman, praktis, tinggal colok, dan langsung #Gocasinajasekarang!</p>',
        ]);

        Faq::create([
            'question' => 'Berapa kapasitas daya yang dimiliki sebuah power bank GoCas?',
            'answer' => '<p>Powerbank GoCas punya kapasitas 5.000 mAh dengan output 2.1A. Cukup banget untuk nge-charge smartphone kamu sampai penuh setidaknya 1x. Ukurannya juga pas — ringan, praktis, dan cocok buat dibawa ke mana-mana!</p>',
        ]);

        Faq::create([
            'question' => 'Berapa lama waktu yang dibutuhkan untuk mengisi penuh baterai ponsel menggunakan power bank GoCas?',
            'answer' => '<p>Waktu pengisian bisa berbeda-beda, tergantung jenis dan kapasitas baterai HP kamu. Tapi secara umum, kalau baterai kamu tinggal 10%, biasanya butuh sekitar 45–75 menit untuk penuh lagi pakai powerbank GoCas. Cukup cepat kan? Cocok banget buat yang butuh isi daya saat lagi mobile!</p>',
        ]);

        Faq::create([
            'question' => 'Apa saja metode pembayaran yang bisa digunakan untuk menyewa power bank GoCas?',
            'answer' => '<p>Kamu bisa membayar sewa power bank GoCas menggunakan berbagai metode pembayaran yang tersedia di aplikasi. Beberapa di antaranya termasuk: GoPay, ShopeePay, DANA, WeChatPay*, Alipay*, Kartu Kredit*, dan lain-lainnya. Tersedia juga metode GoPayLater dan ShopeePayLater.</p>',
        ]);

        Faq::create([
            'question' => 'Apakah saya perlu membayar deposit di awal untuk menyewa power bank GoCas?',
            'answer' => '<p>Betul, kamu perlu bayar deposit Rp99.000 dulu sebagai jaminan sebelum mulai sewa powerbank GoCas. Namun, jangan khawatir ya, tidak akan hangus kok! Setelah kamu kembalikan power bank ke stasiun GoCas, deposit akan dipotong sesuai durasi pemakaian, dan sisanya akan langsung di-refund otomatis ke e-wallet yang kamu pakai saat pembayaran di awal.</p>',
        ]);

        Faq::create([
            'question' => 'Dapatkah GoCas disewa tanpa aplikasi?',
            'answer' => '<p>Bisa banget ya! Pengguna dapat menyewa power bank GoCas tanpa aplikasi dengan cara langsung scan barcode yang tertera di mesin GoCas.</p>',
        ]);

        Faq::create([
            'question' => 'Bagaimana proses log in berlangsung?',
            'answer' => '<p>Caranya mudah sekali cukup 3 langkah saja.</p>
                <ol>
                    <li>1. Masukkan nomor WhatsApp kamu</li>
                    <li>2. Tunggu kode OTP yang akan dikirim lewat WhatsApp</li>
                    <li>3. Setelah dapat OTP, tinggal masukkan kodenya ke aplikasi atau website</li>
                </ol>
            ',
        ]);

        Faq::create([
            'question' => 'Mengapa aku tidak menerima kode verifikasi?',
            'answer' => '<p>Tenang, ini bisa terjadi karena sinyal atau jaringan handphone sedang lemah. <br /><strong>Coba solusi ini, ya:</strong></p>
                <ul>
                    <li>- Pindah ke lokasi dengan sinyal yang lebih kuat</li>
                    <li>- Minta kirim ulang kode verifikasi</li>
                </ul>
                <p>Kalau masih belum masuk juga, kamu dapat hubungi tim Customer Service kami agar dibantu lebih lanjut!</p>
            ',
        ]);

        Faq::create([
            'question' => 'Mengapa power bank tidak keluar dari stasiun GoCas?',
            'answer' => '<p>Ada beberapa penyebab mengapa power bank tidak keluar dari stasiun GoCas:</p>
                <ol>
                    <li><strong>1. Pembayaran gagal.</strong> Pengguna disarankan untuk cek kembali pembayaran yang sudah dilakukan.</li>
                    <li><strong>2. Masalah koneksi internet pengguna.</strong> Apabila pengguna berada di lokasi sinyal lemah, maka pengguna dapat coba sambungkan jaringan ponsel ke WI-FI setempat untuk membantu proses penyewaan power bank GoCas.</li>
                    <li><strong>3. Mesin power bank sedang offline.</strong> Apabila kamu menemukan mesin power bank GoCas sedang offline, kamu dapat menghubungi customer service GoCas atau karyawan setempat untuk menyalakan mesinnya ya.</li>
                </ol>
            ',
        ]);

        Faq::create([
            'question' => 'Apakah power bank GoCas bisa diisi ulang di rumah?',
            'answer' => '<p>Tidak bisa ya. Power bank GoCas hanya bisa diisi ulang di stasiun GoCas saja. Kamu tidak dapat mengisi dayanya di rumah atau melalui charger biasa. Jadi, jangan lupa kembalikan power bank GoCas ke stasiun GoCas setelah selesai digunakan ya.</p>',
        ]);

        Faq::create([
            'question' => 'Berapa lama pengguna bisa mengembalikan power bank GoCas?',
            'answer' => '<p>Pengguna disarankan untuk segera mengembalikan power bank ke stasiun GoCas setelah selesai pakai agar tidak terkena biaya sewa tambahan per jam. Jika menyewa power bank GoCas lebih dari 24 jam, maka pengguna akan dikenakan biaya maksimal per hari sebesar Rp45.000 ya. Oh ya! Pengguna harus mengembalikan power bank yang sedang disewa terlebih dahulu, sebelum menyewa power bank baru ya.</p>',
        ]);

        Faq::create([
            'question' => 'Apa yang harus dilakukan jika power bank tidak berfungsi?',
            'answer' => '<p>Jika power bank yang Anda sewa tidak berfungsi, segera kembalikan ke stasiun GoCas dan lapor melalui aplikasi untuk mendapatkan bantuan lebih lanjut.</p>',
        ]);

        Faq::create([
            'question' => 'Bagaimana jika saya kehilangan powerbank?',
            'answer' => '<p>Jika power bank GoCas kamu hilang, segera laporkan ke Customer Service kami, ya! Akan ada biaya penggantian sesuai dengan kebijakan yang berlaku. Jadi, pastikan selalu dijaga baik-baik ya power bank-nya!</p>',
        ]);
    }
}
