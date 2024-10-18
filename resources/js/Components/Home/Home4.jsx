import React from "react";
import HeaderText from "../Text/HeaderText";
import { Text } from "@chakra-ui/react";
import GridLayanan from "./Grid/GridLayanan";
import * as layananImages from "./../../Assets/layananImages";

const Home4 = () => {
    const services = [
        {
            imgSrc: layananImages.cart,
            title: "Mudah dan Cepat Banget",
            description:
                "Layanan Kami sangat mudah untuk ditemui di mana saja dan kapan saja serta cepat dalam proses penggunaannya.",
        },
        {
            imgSrc: layananImages.dollar,
            title: "Murah Pakai Banget",
            description:
                "Layanan Kami memiliki harga yang murah pakai banget dibandingkan dengan kompetitor kami yang lain.",
        },
        {
            imgSrc: layananImages.safe,
            title: "Penyelamat Hidup",
            description:
                "Layanan Kami memiliki tujuan untuk menyelamatkan hidupmu untuk menggunakan perangkat secara terus menerus.",
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
