import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";

const Home2 = () => {
    return (
        <Box p={{ base: 2, md: 4 }} color="white">
            <Box
                maxWidth="1500px"
                mx="auto"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={{ base: 2, md: 4, lg: 8 }}
                my={{ base: 5, md: 10, lg: 14 }}
            >
                <Box
                    flex={{ base: "auto", md: 1 }}
                    pr={{ base: 0, md: 4, lg: 6 }}
                >
                    <HeaderText
                        iconColor="green"
                        size="normal"
                        inputclass={"xl:!text-5xl md:!text-5xl !text-3xl"}
                    >
                        HIDUPKAN PERANGKATMU DENGAN
                    </HeaderText>
                    <HeaderText
                        iconColor="brown"
                        size="normal"
                        topMargin={10}
                        inputclass={"xl:!text-5xl md:!text-3xl !text-lg"}
                    >
                        #GOCASinSekarang
                    </HeaderText>
                </Box>
                <Box
                    flex={{ base: "auto", md: 1 }}
                    pl={{ base: 0, md: 4, lg: 6 }}
                >
                    <HeaderText
                        iconColor="black"
                        size="small"
                        topMargin={{ base: 20, md: 10, lg: 0 }}
                        textStyle={{ base: "headline", md: "subheadline" }}
                    >
                        SALAM KENAL, Sobat GOCAS!
                    </HeaderText>
                    <Text
                        fontSize={{ base: "sm", md: "md" }}
                        fontFamily="poppins"
                        textAlign="justify"
                        color="black"
                        pr={{ base: 0, md: 4, lg: 24 }}
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
