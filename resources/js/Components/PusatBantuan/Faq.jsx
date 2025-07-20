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
} from "@chakra-ui/react";

function Faq({ faqs }) {
  return (
    <>
        <Box 
            bgImage={`url('/images/PusatBantuan/Body Background.png')`}
            bgSize="cover"
            py={50}
            px={50}        
        >
            <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={6} mt={1} textAlign="center" fontFamily="Dela Gothic One">
                Frequenly Asked Questions
            </Heading>

            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={6} mt={2} textAlign="center">
                sudah digunakan lebih dari 1000+ orang
            </Heading>

            <Box
                display="flex" 
                justifyContent="center"
            >
                <Accordion allowToggle w="80%">
                    {faqs.map((item, index) => (
                        <AccordionItem key={index} border="1px solid" borderColor="gray.200" borderRadius="md" mb={2} bgColor="gray.200">
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
            </Box>
        </Box>
    </>
  )
}

export default Faq