// Home3.jsx
import React from "react";
import {
    Box,
    Text,
    VStack,
    Flex,
    List,
    ListItem,
    Circle,
} from "@chakra-ui/react";

const stepsBorrow = [
    "Buka Halaman Utama dari Aplikasi GoCas.",
    "Daftar atau Masuk ke akun di aplikasi GoCas.",
    "Top up akun GoCas kamu sebelum melakukan peminjaman.",
    "Tap menu 'Scan GoCas' di aplikasi dan scan QR code pada mesin.",
    "Pilih kabel yang sesuai (iOs, Type-C, atau MicroUSB).",
    "Ambil powerbank dari mesin dan gunakan.",
];

const stepsReturn = [
    "Cari GoCas Station yang paling dekat dengan kamu.",
    "Tap tombol Kembalikan di GoCas Station.",
    "Masukan GoCas Powerbank ke slot mesin yang terbuka.",
    "Tunggu status “Sewa” berubah menjadi “Kembali”",
    "GoCas Powerbank telah berhasil dikembalikan.",
];

const StepList = ({ steps }) => (
    <List spacing={4} position="relative">
        {steps.map((step, index) => (
            <ListItem
                key={index}
                display="flex"
                alignItems="flex-start"
                position="relative"
            >
                <Circle
                    size="30px"
                    bg="green.500"
                    color="white"
                    fontWeight="bold"
                    mr={4}
                    zIndex="1"
                >
                    {index + 1}
                </Circle>
                <Box flex="1">
                    <Text fontSize="md" color="black">
                        {step}
                    </Text>
                </Box>
                {/* Vertical line connecting circles */}
                {index < steps.length - 1 && (
                    <Box
                        position="absolute"
                        top="30px" // Start below the circle
                        left="15px" // Center with the circle
                        height="calc(100% - 30px)" // Extend line to the next circle
                        width="2px"
                        bg="green.500"
                        zIndex="0"
                    />
                )}
            </ListItem>
        ))}
    </List>
);

const Home3 = () => {
    return (
        <Box p={6}>
            <Flex
                direction={["column", "row"]}
                gap={6}
                justify="center"
                align="center"
                maxW="1100px"
                mx="auto"
            >
                {/* Borrow Section */}
                <Box
                    bg="yellow.300"
                    p={6}
                    borderRadius="xl"
                    shadow="md"
                    maxW="500px"
                    w="full"
                >
                    <Text fontSize="2xl" fontWeight="bold" color="black" mb={4}>
                        Cara meminjam
                    </Text>
                    <StepList steps={stepsBorrow} />
                </Box>

                {/* Return Section */}
                <Box
                    bg="yellow.200"
                    p={6}
                    borderRadius="xl"
                    shadow="md"
                    maxW="500px"
                    w="full"
                >
                    <Text fontSize="2xl" fontWeight="bold" color="black" mb={4}>
                        Cara pengembalian
                    </Text>
                    <StepList steps={stepsReturn} />
                </Box>
            </Flex>
        </Box>
    );
};

export default Home3;
