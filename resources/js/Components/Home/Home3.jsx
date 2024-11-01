import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import StepList from "./StepList";
import HeaderText from "../Text/HeaderText";

const stepsBorrow = [
    "Buka Halaman Utama dari Aplikasi GoCas.",
    "Daftar atau Masuk ke akun di aplikasi GoCas.",
    "Top up akun GoCas kamu sebelum melakukan peminjaman.",
    "Tap menu 'Scan GoCas' di aplikasi dan scan QR code pada mesin.",
    "Pilih kabel yang sesuai (iOS, Type-C, atau MicroUSB).",
    "Ambil powerbank dari mesin dan gunakan.",
];

const stepsReturn = [
    "Cari GoCas Station yang paling dekat dengan kamu.",
    "Tap tombol Kembalikan di GoCas Station.",
    "Masukan GoCas Powerbank ke slot mesin yang terbuka.",
    "Tunggu status “Sewa” berubah menjadi “Kembali”",
    "GoCas Powerbank telah berhasil dikembalikan.",
];

const Home3 = () => {
    return (
        <Box p={6}>
            <Flex
                direction={["column", "row"]}
                gap={6}
                justify="center"
                align="start"
                maxW="1500px"
                mx="auto"
            >
                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="brown"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara meminjam
                    </HeaderText>
                    <Box
                        bg="rgba(239, 200, 43, 0.5)"
                        p={10}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                        opacity="80%"
                    >
                        <StepList steps={stepsBorrow} />
                    </Box>
                </Box>

                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="brown"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara pengembalian
                    </HeaderText>
                    <Box
                        bg="rgba(236, 229, 187, 0.5)"
                        p={10}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                    >
                        <StepList steps={stepsReturn} />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Home3;
