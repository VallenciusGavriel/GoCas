import Friendly from "./../../../../public/images/home/friendly.png";
import Flexibility from "./../../../../public/images/home/flexibility.png";
import Refund from "./../../../../public/images/home/refund.png";
import Responsif from "./../../../../public/images/home/responsif.png";
import { Flex } from "@chakra-ui/react";

export const stepsBorrow = [
    "Buka Halaman Utama dari Aplikasi GoCas.",
    "Daftar atau Masuk ke akun di aplikasi GoCas.",
    "Top up akun GoCas kamu sebelum melakukan peminjaman.",
    "Tap menu 'Scan GoCas' di aplikasi dan scan QR code pada mesin.",
    "Pilih kabel yang sesuai (iOS, Type-C, atau MicroUSB).",
    "Ambil powerbank dari mesin dan gunakan.",
];

export const stepsReturn = [
    "Cari GoCas Station yang paling dekat dengan kamu.",
    "Tap tombol Kembalikan di GoCas Station.",
    "Masukan GoCas Powerbank ke slot mesin yang terbuka.",
    "Tunggu status “Sewa” berubah menjadi “Kembali”",
    "GoCas Powerbank telah berhasil dikembalikan.",
];

export const features = [
    {
        icon: Friendly,
        title: "Mudah digunakan",
        description: "Mudah digunakan untuk pengguna baru atau berpengalaman",
    },
    {
        icon: Flexibility,
        title: "Fleksibel",
        description:
            "GoCas dapat ditemukan di lokasi-lokasi strategis yang mudah diakses kapan saja dan di mana saja",
    },
    {
        icon: Refund,
        title: "Dapat di Refund",
        description:
            "Sesuaikan waktu sewa sesuai kebutuhan Anda. Harga terjangkau dan opsi refund tersedia jika Anda berubah pikiran",
    },
    {
        icon: Responsif,
        title: "Responsif",
        description:
            "Layanan pelanggan kami siap 24/7 membantu kapan pun tepat waktu dan selalu siap diandalkan!",
    },
];
