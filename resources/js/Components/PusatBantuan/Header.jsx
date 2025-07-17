import React, { useState } from 'react'
import SyaratKetentuan from './SyaratKetentuan';
import Faq from './Faq';
import KetentuanPengembalian from './KetentuanPengembalian';
import { Box, Button, Heading, HStack, Text, Flex } from "@chakra-ui/react";

function Header( { faqs, content, content2 } ) {
  const [activeTab, setActiveTab] = useState("faq");

  const renderContent = () => {
        switch (activeTab) {
            case "faq":
                return <Faq faqs={faqs} />;
            case "syarat":
                return <SyaratKetentuan content={content} />;
            case "pengembalian":
                return <KetentuanPengembalian content={content2}/>;
            default:
                return null;
        }
  };

  return (
    <>
        <Box
            bgImage={`url('/images/PusatBantuan/Top Background.png')`}
            bgSize="100px 25px"
            bgRepeat="none"
            py={100}
        >
            <Heading as="h2" fontSize="6xl" mb={6} mt={20} px="20%" fontFamily="Dela Gothic One">
                PUSAT <br /> BANTUAN
            </Heading>

            <HStack spacing={4} justify="center">
                <Flex
                    justify="center"
                    flexWrap="wrap"
                    gap={4} // space between buttons
                >
                <Button
                    onClick={() => setActiveTab("faq")}
                    colorScheme={activeTab === "faq" ? "green" : "gray"}
                    borderColor={activeTab === "faq" ? "green" : "gray"}
                    borderRadius="full"
                    px={8}
                    fontWeight="bold"
                    color="black"
                    w={{ base: "80%", md: "250px" }}
                    >
                    FAQ
                    </Button>
                    <Button
                    onClick={() => setActiveTab("syarat")}
                    colorScheme={activeTab === "syarat" ? "green" : "gray"}
                    borderRadius="full"
                    px={8}
                    borderColor={activeTab === "syarat" ? "green" : "gray"}
                    color="black"
                    fontWeight="bold"
                    w={{ base: "80%", md: "250px" }}
                    >
                    Syarat & Ketentuan
                    </Button>
                    <Button
                    onClick={() => setActiveTab("pengembalian")}
                    colorScheme={activeTab === "pengembalian" ? "green" : "gray"}
                    borderColor={activeTab === "pengembalian" ? "green" : "gray"}
                    borderRadius="full"
                    px={8}
                    color="black"
                    fontWeight="bold"
                    w={{ base: "80%", md: "250px" }}
                    >
                    Ketentuan pengembalian
                </Button>
                </Flex>
            </HStack>
        </Box>

        <Box>{renderContent()}</Box>
    </>
  )
}

export default Header
