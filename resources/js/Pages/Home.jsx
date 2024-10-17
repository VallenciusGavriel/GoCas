import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import {
    Home1,
    Home2,
    Home3,
    Home4,
    Home5,
    Home6,
    Home7,
    Home8,
} from "@/Components/Home";

const Home = () => {
    const homeComponents = [
        Home1,
        Home2,
        Home3,
        Home4,
        Home5,
        Home6,
        Home7,
        Home8,
    ];

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
                        bgImage={`url('/images/home/background-${
                            index + 1
                        }.png')`}
                        bgSize="cover"
                        bgPos="center"
                        p={10}
                        borderRadius="0"
                        position="relative"
                        overflow="hidden"
                    >
                        {index === 0 && (
                            <>
                                <Box
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    right="0"
                                    height="30%"
                                    backgroundColor="rgba(255, 255, 255, 0.9)"
                                    zIndex="1"
                                />
                                <Box
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    right="0"
                                    height="70%"
                                    backgroundColor="rgba(255, 255, 255, 0.45)"
                                    zIndex="1"
                                />
                            </>
                        )}
                        <Component />
                    </Box>
                ))}
            </VStack>
            <Footer />
        </>
    );
};

export default Home;
