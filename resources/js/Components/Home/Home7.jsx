import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Divider,
    Flex,
    Button,
} from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";

const faqData = [
    {
        question: "Bagaimana cara menyewa dan menggunakan powerbank GoCas?",
        answer: "1. Buka Aplikasi Web GoCas.\n2. Klik menu ‘Scan GoCas’.\n3. Scan QR code pada mesin.\n4. Ambil powerbank dari mesin.",
    },
    {
        question: "Dimana aku bisa mengembalikan powerbank GoCas?",
        answer: "Powerbank bisa dikembalikan di semua stasiun GoCas yang tersedia.",
    },
    {
        question: "Bagaimana cara menemukan GoCas Station terdekat?",
        answer: "Gunakan aplikasi GoCas untuk menemukan lokasi stasiun terdekat menggunakan fitur maps.",
    },
    {
        question: "Apakah harga sewa di semua lokasi sama?",
        answer: "Harga sewa bisa berbeda tergantung lokasi. Cek aplikasi GoCas untuk informasi lebih detail.",
    },
];

const Home7 = () => {
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="black">
                Soal Sering Ditanya
            </HeaderText>
            <Box my={4}>
                <Accordion allowToggle>
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            bg="white"
                            borderRadius="0"
                            shadow="sm"
                            my={1}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left" py={2}>
                                        <Text fontFamily='"Dela Gothic One", sans-serif'>
                                            {faq.question}
                                        </Text>
                                    </Box>
                                    <AccordionIcon color="black" />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                                <Divider borderColor="#FEE50C" />
                                <Text
                                    whiteSpace="pre-line"
                                    fontFamily="poppins"
                                >
                                    {faq.answer}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box>
                <Text textAlign="center" fontWeight="bold" fontFamily="poppins">
                    Pertanyaanmu Belum Terjawab?
                </Text>
                <Flex justifyContent="center" mt={2}>
                    <Button
                        bg="white"
                        textColor="black"
                        borderRadius="0"
                        fontWeight="bold"
                        fontFamily="poppins"
                    >
                        Temukan Kami
                    </Button>
                </Flex>
            </Box>
        </>
    );
};

export default Home7;
