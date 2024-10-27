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

const About = () => {
    return (
        <>
            <Navbar />
            <Head title="Tentang Kami" />
            <VStack spacing={0} mt="64px">
            </VStack>
            <Footer />
        </>
    );
};

export default About;
