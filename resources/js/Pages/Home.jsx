import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Box p={5}>
                <Heading mb={4}>Welcome to My Laravel Inertia App</Heading>
                <Button colorScheme="teal">Click Me</Button>
            </Box>
            <Footer />
        </>
    );
};

export default Home;
