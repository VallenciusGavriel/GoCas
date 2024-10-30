import React from "react";
import HeaderText from "../Text/HeaderText";
import { Text } from "@chakra-ui/react";
import GridLayanan from "./Grid/GridLayanan";
import * as layananImages from "./../../Assets/layananImages";

const Home4 = () => {
    const services = [
        {
            imgSrc: layananImages.cart,
            title: "Praktis",
            description:
                "Dengan GoCas, Anda bisa menyewa Power bank dengan beberapa kali klik di aplikasi. Kami menyediakan instruksi yang mudah diikuti, membuat proses sewa lebih cepat dan praktis.",
        },
        {
            imgSrc: layananImages.dollar,
            title: "Terjangkau",
            description:
                "Kami menawarkan harga sewa yang transparan dan terjangkau, dengan berbagai metode pembayaran yang memudahkan Anda, termasuk e-wallet dan kartu kredit. Nikmati kebebasan memilih opsi pembayaran yang sesuai dengan Anda.",
        },
        {
            imgSrc: layananImages.safe,
            title: "Dana Dikembalikan",
            description:
                "Jika ada situasi di mana powerbank tidak digunakan sepenuhnya atau terjadi kesalahan teknis, pengguna dapat mengajukan pengembalian dengan mudah. Proses ini meningkatkan rasa percaya diri dalam menggunakan aplikasi GoCas, karena pengguna tahu bahwa mereka tidak akan dirugikan.",
        },
    ];
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="green">
                Kenapa Harus Pakai Layanan Kami?
            </HeaderText>
            <GridLayanan services={services} columnsMd={3} />
        </>
    );
};

export default Home4;
