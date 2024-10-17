import React from "react";
import { Center, Flex, Heading, Image, Box } from "@chakra-ui/react";
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
} from "@/Components/Home"; // Adjust the path as necessary

const Home = () => {
    // Array of components for easier mapping
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
            <Head title="Home" />
            <Navbar />
            {homeComponents.map((Component, index) => (
                <Box
                    key={index}
                    w="full"
                    h="screen"
                    bgImage={`url('/images/home/background-${index + 1}.png')`}
                    bgSize="cover"
                    bgPos="center"
                    p={5}
                    borderRadius="lg"
                >
                    <Component />
                </Box>
            ))}

            <Footer />
        </>
    );
};

export default Home;
