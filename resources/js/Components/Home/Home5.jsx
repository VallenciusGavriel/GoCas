import React from "react";
import HeaderText from "../Text/HeaderText";
import { Text } from "@chakra-ui/react";
import GridLayanan from "./Grid/GridLayanan";
import * as layananImages from "./../../Assets/layananImages";

const Home5 = () => {
    const services = [
        {
            imgSrc: layananImages.share,
            title: "Powerbank Sharing",
            description:
                "Powerbank GoCas siap menjaga smartphone, kamera, atau perangkat seluler lainnya tetap terisi daya saat kamu bepergian. Ayo, sewa powerbank di GoCas Station terdekat dan nikmati kemudahannya!",
        },
        {
            imgSrc: layananImages.media,
            title: "Media Placement",
            description:
                "GoCas dapat membantu meningkatkan brand awareness melalui saluran offline yang inovatif, dengan 250 mesin yang dilengkapi layar 43 inci, serta lebih dari 10.000 powerbank berbranding yang ditempatkan di lokasi-lokasi strategis.",
        },
    ];
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="white">
                Apa Saja Produk dan Layanan Kami?
            </HeaderText>
            <GridLayanan services={services} columnsMd={2} />
        </>
    );
};

export default Home5;
