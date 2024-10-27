import React from "react";
import {Box, Flex, Image, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/about/bg1.png";

const About = () => {
  const size = useBreakpointValue({
    base: { height: "100vh", width: "auto" },
    xl: { width: "100vw", height: "auto" },
  });

    return (
      <>
        <Navbar />
        <Head title="Tentang Kami" />
        <VStack spacing={0} mt="64px">
          <Flex>
            <Image
              src={Background}
              alt="Background"
              mb={2}
              height={size.height}
              width={size.width}
              objectFit="cover"
            />
          </Flex>
        </VStack>
        <Footer />
      </>
    );
};

export default About;
