import React from "react";
import {
    Box,
    Heading,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    VStack,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const faqData = [
    {
        question: "Apa itu GoCas?",
        answer: "GoCas adalah layanan penyewaan powerbank. Anda cukup membuka aplikasi GoCas, mencari GoCas Station terdekat, dan menyewa/mengembalikan powerbank hanya dengan beberapa ketukan.",
    },
    {
        question: "Bagaimana cara menyewa/mengembalikan powerbank?",
        answer: "Sangat mudah! Cukup buka aplikasi GoCas, cari lokasi GoCas Station terdekat, dan sewa/kembalikan powerbank hanya dengan beberapa ketukan.",
    },
    {
        question: "Bagaimana cara menemukan stasiun penyewaan GO CAS?",
        answer: "Buka aplikasi GoCas dan gunakan fitur pencarian untuk menemukan stasiun penyewaan GoCas terdekat dari lokasi Anda.",
    },
    {
        question: "Berapa lama saya bisa menyewa powerbank?",
        answer: "Anda bisa menyewa powerbank selama yang Anda butuhkan, selama itu dikembalikan pada waktu yang ditentukan dalam ketentuan penyewaan.",
    },
    {
        question: "Apa yang harus dilakukan jika powerbank tidak berfungsi?",
        answer: "Jika powerbank yang Anda sewa tidak berfungsi, segera kembalikan ke stasiun GoCas dan lapor melalui aplikasi untuk mendapatkan bantuan lebih lanjut.",
    },
];

const FAQPage = () => {
    const bg = useColorModeValue("white", "gray.800");

    return (
        <Box bg={bg} p={6}>
            <VStack spacing={4} align="stretch">
                <Heading as="h1" size="xl" textAlign="center">
                    Pertanyaan yang Sering Diajukan (FAQ)
                </Heading>
                {faqData.map((faq, index) => (
                    <Accordion allowToggle key={index}>
                        <AccordionItem border="none">
                            <h2>
                                <AccordionButton _expanded={{ bg: "gray.100" }}>
                                    <Box flex="1" textAlign="left">
                                        {faq.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
                <Box pt={10} textAlign="center">
                    <Text mb={2}>Tidak dapat menemukan yang Anda cari?</Text>
                    <Text>Kami ingin berbicara dengan Anda</Text>
                    <IconButton
                        aria-label="Chat with us"
                        icon={<ChatIcon />}
                        size="lg"
                        isRound
                        colorScheme="blue"
                    />
                </Box>
            </VStack>
        </Box>
    );
};

export default FAQPage;
