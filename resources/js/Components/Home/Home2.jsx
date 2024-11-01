import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";

const Home2 = () => {
    return (
        <Box p={4} color="white">
            <Box
                maxWidth="1500px"
                mx="auto"
                display="flex"
                flexDirection={["column", "row"]}
                alignItems="center"
                justifyContent="space-between"
                height="full"
                gap={{ base: 0, md: 8 }}
                my={28}
            >
                <Box flex="1" pr={{ base: 0, md: 4 }}>
                    <HeaderText iconColor="green" size="normal">
                        HIDUPKAN PERANGKATMU DENGAN
                    </HeaderText>
                    <HeaderText iconColor="brown" size="normal" topMargin={10}>
                        #GOCASinSekarang
                    </HeaderText>
                </Box>
                <Box flex="1" pl={{ base: 0, md: 4 }}>
                    <HeaderText iconColor="black" size="small" mt={4}>
                        SALAM KENAL, Sobat GOCAS!
                    </HeaderText>
                    <Text
                        fontSize="md"
                        color="black"
                        fontFamily="poppins"
                        textAlign="justify"
                        pr={24}
                        mb={6}
                    >
                        Hai! Kami GoCas Indonesia, solusi cerdas buat kamu yang
                        aktif dan nggak mau ribet. Dengan teknologi berbasis
                        Internet of Things (IoT), GoCas hadir untuk memastikan
                        gadget kamu tetap terisi penuh kapan pun dan di mana pun
                        kamu butuh...
                    </Text>
                    <Link
                        color="black"
                        href="/about"
                        fontFamily="poppins"
                        fontWeight="bold"
                    >
                        Baca selengkapnya
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Home2;
