import React, { useState } from 'react'
import SyaratKetentuan from './SyaratKetentuan';
import Faq from './Faq';
import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";

function Header( { faqs, content } ) {
  const [activeTab, setActiveTab] = useState("faq");

  const renderContent = () => {
        switch (activeTab) {
            case "faq":
                return <Faq faqs={faqs} />;
            case "syarat":
                return <SyaratKetentuan content={content} />;
            // case "pengembalian":
            //     return <KetentuanPengembalian />;
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
                <Button
                    onClick={() => setActiveTab("faq")}
                    colorScheme={activeTab === "faq" ? "green" : "gray"}
                    borderColor={activeTab === "faq" ? "green" : "gray"}
                    borderRadius="full"
                    px={8}
                    fontWeight="bold"
                    color="black"
                    width="15%"
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
                    width="15%"
                    >
                    Syarat & Ketentuan
                    </Button>
                    <Button
                    colorScheme='gray'
                    borderColor="black"
                    borderRadius="full"
                    px={8}
                    color="black"
                    fontWeight="bold"
                    width="15%"
                    >
                    Ketentuan pengembalian
                </Button>
            </HStack>
        </Box>

        <Box>{renderContent()}</Box>
    </>
  )
}

export default Header