import React from "react";
import HeaderText from "../Text/HeaderText";
import { Box, Flex } from "@chakra-ui/react";
import GridKenyamanan from "./Grid/GridKenyamanan";
import * as layananImages from "./../../Assets/layananImages";

const Home8 = () => {
    const kenyamanans = [
        {
            imgSrc: layananImages.user,
            title: "Pengguna",
            description: "Daftar Sekarang dan Rasakan Kemudahannya!",
            buttons: [
                {
                    label: "Daftar",
                    action: () => console.log("Daftar clicked"),
                },
                {
                    label: "Masuk",
                    action: () => console.log("Learn More clicked"),
                },
            ],
        },
        {
            imgSrc: layananImages.partner,
            title: "Partner",
            description: "Tingkatkan layanan bisnismu dengan GoCas.",
            buttons: [
                {
                    label: "Hubungi Kami",
                    action: () => console.log("Join Us clicked"),
                },
            ],
        },
    ];
    return (
        <>
            <Flex justifyContent="center">
                <HeaderText size="normal" withIcon={false} iconColor="black">
                    Sudah Siap untuk Memberikan Kenyamanan Perangkatmu?
                </HeaderText>
            </Flex>
            <Box my={4}></Box>
            <GridKenyamanan kenyamanans={kenyamanans} columnsMd={2} />
        </>
    );
};

export default Home8;
