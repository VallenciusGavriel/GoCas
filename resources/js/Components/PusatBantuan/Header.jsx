import React, { useState } from 'react'
import SyaratKetentuan from './SyaratKetentuan';
import Faq from './Faq';
import KetentuanPengembalian from './KetentuanPengembalian';
import { Box, Button, Heading, HStack, Stack, Text, Flex } from "@chakra-ui/react";

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
            <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} mb={6} mt={20} px={{ base: "10%", md: "20%" }} fontFamily="Dela Gothic One">
                PUSAT <br /> BANTUAN
            </Heading>

        </Box>

        <Box
            bgImage={`url('/images/PusatBantuan/Body Background.png')`}
            bgSize="cover"
        >
        <Stack
            direction={{ base: "column", md: "row" }} // column on mobile, row on desktop
            spacing={{ base: 4, md: 40 }} // spacing between items
            justify="center"
            align="center"
            py={6}
            >
            {[
                { key: "faq", label: "FAQ" },
                { key: "syarat", label: "Syarat & Ketentuan" },
                { key: "pengembalian", label: "Ketentuan Pengembalian" }
            ].map((tab) => (
                <Box
                key={tab.key}
                cursor="pointer"
                pb={2}
                borderBottom={activeTab === tab.key ? "12px solid #FFD700" : "4px solid transparent"}
                onClick={() => setActiveTab(tab.key)}
                w={{ base: "50%", md: "auto" }} // full width on mobile
                textAlign="center"
                >
                <Text
                    fontWeight={activeTab === tab.key ? "bold" : "normal"}
                    color={activeTab === tab.key ? "black" : "gray.500"}
                    fontFamily="Dela Gothic One"
                    fontSize={{ base: "md", md: "md" }}
                >
                    {tab.label}
                </Text>
                </Box>
            ))}
        </Stack>
        {renderContent()}</Box>
    </>
  )
}

export default Header
