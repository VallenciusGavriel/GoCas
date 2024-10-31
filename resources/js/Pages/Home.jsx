import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import { Home1, Home2, Home3, Home4 } from "@/Components/Home";

const Home = () => {
    const homeComponents = [Home1, Home2, Home3, Home4];

    return (
        <>
            <Navbar />
            <Head title="Home" />
            <VStack spacing={0} mt="64px">
                {" "}
                {/* Adjust the margin-top to match the Navbar's height */}
                {homeComponents.map((Component, index) => (
                    <Box
                        key={index}
                        w="full"
                        h="screen"
                        bgImage={`url('/images/home/background-0${
                            index + 1
                        }.png')`}
                        bgSize="cover"
                        bgPos="top"
                        p={10}
                        borderRadius="0"
                        position="relative"
                        overflow="hidden"
                    >
                        <Component />
                    </Box>
                ))}
            </VStack>
            <Footer />
        </>
    );
};

export default Home;
