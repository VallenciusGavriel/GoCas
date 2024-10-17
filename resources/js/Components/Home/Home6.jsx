import React from "react";
import HeaderText from "../Text/HeaderText";
import { Box } from "@chakra-ui/react";
import GridCaraPakai from "./Grid/GridCaraPakai";
import GridCaraBalik from "./Grid/GridCaraBalik";

const Home6 = () => {
    const steps = [
        {
            title: "1",
            description: "Buka Halaman Utama dari Aplikasi Web GoCas.",
        },
        {
            title: "2",
            description: "Daftar atau Masuk ke akun di Web GoCas.",
        },
        {
            title: "3",
            description: "Top up akun GoCas kamu sebelum melakukan peminjaman.",
        },
        {
            title: "4",
            description:
                "Tap menu 'Scan ReCharge' di aplikasi dan scan QR code pada mesin.",
        },
        {
            title: "5",
            description: "Pilih kabel yang sesuai (iOs, Type-C, atau MicroUSB)",
        },
        {
            title: "6",
            description: "Ambil powerbank dari mesin dan gunakan.",
        },
    ];

    const backs = [
        {
            title: "1",
            description: "Cari GoCas Station yang paling dekat dengan kamu.",
        },
        {
            title: "2",
            description: "Tap tombol Kembalikan di GoCas Station.",
        },
        {
            title: "3",
            description: "Masukan GoCas Powerbank ke slot mesin yang terbuka.",
        },
        {
            title: "4",
            description: "Tunggu status “Sewa” berubah menjadi “Kembali”",
        },
        {
            title: "5",
            description: "GoCas Powerbank telah berhasil dikembalikan.",
        },
    ];

    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="white">
                Bagaimana Cara Pakainya?
            </HeaderText>

            <Box my={4}>
                <HeaderText size="small" withIcon={false} iconColor="white">
                    Cara Meminjam
                </HeaderText>
                <GridCaraPakai steps={steps} columnsMd={3} />
            </Box>

            <Box my={4}>
                <HeaderText size="small" withIcon={false} iconColor="white">
                    Cara Mengembalikan
                </HeaderText>
                <GridCaraBalik backs={backs} columnsMd={3} />
            </Box>
        </>
    );
};

export default Home6;
