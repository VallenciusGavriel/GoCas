import React from 'react'
// import { Button, Heading, HStack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  HStack,
} from "@chakra-ui/react";

function Faq({ faqs }) {
  return (
    <>
        <Box 
            py={50}
            px={50}        
        >
            <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={6} mt={1} textAlign="center" fontFamily="Dela Gothic One">
                Frequenly Asked Questions
            </Heading>

            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={6} mt={2} textAlign="center">
                sudah digunakan lebih dari 1000+ orang
            </Heading>

            <Box display="flex" flexDirection="column" alignItems="center">
            <Accordion allowToggle w="80%">
                {faqs.map((item, index) => (
                <AccordionItem
                    key={index}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="md"
                    mb={2}
                    bgColor="gray.200"
                >
                    <h2>
                    <AccordionButton _expanded={{ bg: "blue.100", color: "blue.800" }} px={4} py={3}>
                        <Box flex="1" textAlign="left" fontWeight="bold">
                        {item.question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} px={4} color="gray.700">
                    <Box dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionPanel>
                </AccordionItem>
                ))}
            </Accordion>

            {/* Hubungi Kami */}
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={10}
            >
                <Heading
                as="h3"
                fontSize="md"
                fontWeight="normal"
                textAlign="center"
                color="gray.600"
                mb={6}
                >
                Tidak dapat menemukan pertanyaan yang kamu cari? <br /><br /> Hubungi kami
                </Heading>

                <HStack spacing={6}>
                <a href="https://wa.me/6282188886665" target="_blank" rel="noopener noreferrer">
                    <Box
                    as="img"
                    src="/images/PusatBantuan/whatsapp-icon.png"
                    alt="WhatsApp"
                    boxSize="75px"
                    cursor="pointer"
                    />
                </a>

                <a href="mailto:example@email.com">
                    <Box
                    as="img"
                    src="/images/PusatBantuan/email-icon.png"
                    alt="Email"
                    boxSize="50px"
                    cursor="pointer"
                    />
                </a>
                </HStack>
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Faq