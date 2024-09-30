import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

const Home = () => {
    return (
        <Box p={5}>
            <Heading mb={4}>Welcome to My Laravel Inertia App</Heading>
            <Button colorScheme="teal">Click Me</Button>
        </Box>
    );
};

export default Home;
