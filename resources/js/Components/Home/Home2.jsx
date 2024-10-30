import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";
import GuardImage from "./../../../../public/images/home/guard.png";
import GocasLogo from "../../../../public/images/navbar/gocas-logo.png";

const Home2 = () => {
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="yellow">
                Siapa Kami?
            </HeaderText>
            <Flex alignItems="center" gap={2} mt={4}>
                <Image
                    src={GocasLogo}
                    alt="Guard Image"
                    w="10%"
                    objectFit="cover"
                />
                <Text
                    fontSize="lg"
                    fontFamily="poppins"
                    lineHeight="tall"
                    flex="8"
                    mx={8}
                >
                  <b>GoCas Indonesia</b> adalah brand penyewaan Power bank inovatif yang hadir untuk memberikan solusi pengisian daya bagi para pengguna yang aktif dan dinamis. Berdiri dengan misi untuk menghubungkan energi dengan mobilitas, GoCas menghadirkan layanan praktis, cepat, dan dapat diandalkan dalam menyediakan Power bank kapan pun dan di mana pun Anda membutuhkan.
                  Kami berkomitmen untuk memastikan agar Anda tidak lagi kehabisan daya di tengah aktivitas sehari-hari.
                </Text>
            </Flex>
        </>
    );
};

export default Home2;
