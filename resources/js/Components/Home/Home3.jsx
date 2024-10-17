import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";
import GuardImage from "./../../../../public/images/home/guard.png";

const Home3 = () => {
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="green">
                Jalinan Kerjasama GoCas
            </HeaderText>
            <Text fontSize="lg">
                Kami menjalin kerjasama dengan banyak partner kerja yang
                mendukung infrastruktur untuk pelanggan setia Kami.
            </Text>
            <Flex alignItems="center" gap={2} mt={4}>
                <Image
                    src={GuardImage}
                    alt="Guard Image"
                    w="10%"
                    objectFit="cover"
                />
                <Text fontSize="lg" lineHeight="tall" flex="8" mx={8}>
                    GoCas adalah perusahaan Internet of Things (IoT) yang hadir
                    dengan misi simpel, yaitu bikin hidup kamu lebih mudah lewat
                    teknologi keren berbasis internet! Kami menyediakan layanan
                    sewa powerbank yang super gampang diakses dan ramah di
                    kantong, jadi kamu bisa bebas dari panik saat baterai
                    perangkatmu mulai habis. Yuk, bersama GoCas, tetap aktif dan
                    selalu terhubung tanpa khawatir!
                </Text>
            </Flex>
        </>
    );
};

export default Home3;
