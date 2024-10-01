import React from "react";
import { Center, Flex, Heading, Image } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import {Head} from "@inertiajs/react";

const Home = () => {
    return (
        <>
          <Head title="Home" />
            {/*<Navbar />*/}
              <Center
                p={5}
                w="100%"
                h={"100vh"}
                position={"relative"}
                bg="#F2F2F3"
              >
                <Flex direction={{ base: "column", md: "column" }}>
                  <Image src='/images/logo.png' alt='GoCas' />
                  <Center mt={"40px"}>
                    <Heading>PT Makmur Tech Indonesia</Heading>
                  </Center>
                </Flex>
              </Center>
            <Footer />
        </>
    );
};

export default Home;
