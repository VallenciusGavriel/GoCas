import Footer from "@/Components/Footer/Footer";
import { Home1, Home2, Home3, Home4 } from "@/Components/Home";
import Navbar from "@/Components/Navbar/Navbar";
import { Box, VStack } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import {Helmet} from "react-helmet";

const Home = () => {
    const homeComponents = [Home1, Home2, Home3, Home4];

    return (
        <>
            <Navbar />
            <Head title="Home" />
            <Helmet>
                <title>Sewa Power Bank - Gocas</title>
                <meta name="description" content="Sewa power bank murah dan praktis untuk kebutuhan Anda." />
                <meta name="keywords" content="sewa power bank, rental power bank, powerbank murah" />
            </Helmet>
            <VStack spacing={0}>
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
                        p={{ base: 0, md: 4, lg: 8 }}
                        borderRadius="0"
                        position="relative"
                        overflow="hidden"
                        pt="64px"
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
