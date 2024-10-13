import React from "react";
import { Center, Flex, Heading, Image, Box } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import Home1 from "@/Components/Home/Home1";
import Home2 from "@/Components/Home/Home2";
import Home3 from "@/Components/Home/Home3";
import Home4 from "@/Components/Home/Home4";
import Home5 from "@/Components/Home/Home5";
import Home6 from "@/Components/Home/Home6";
import Home7 from "@/Components/Home/Home7";
import Home8 from "@/Components/Home/Home8";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <Box px={10} py={20} gap={10} display="flex" flexDirection="column">
                <Home1 />
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
                <Home7 />
                <Home8 />
            </Box>

            {/* <Center
                p={5}
                w="100%"
                h={"100vh"}
                position={"relative"}
                bg="#F2F2F3"
            >
                <Flex direction={{ base: "column", md: "column" }}>
                    <Image src="/images/logo.png" alt="GoCas" />
                    <Center mt={"40px"}>
                        <Heading>PT Makmur Tech Indonesia</Heading>
                    </Center>
                </Flex>
            </Center> */}
            <Footer />
        </>
    );
};

export default Home;
