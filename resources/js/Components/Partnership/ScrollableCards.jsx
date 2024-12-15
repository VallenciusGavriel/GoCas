import React from "react";
import {Box, Flex, Text, VStack, HStack, Image} from "@chakra-ui/react";

const cards = [
    {
        title: "Tingkatkan Layanan",
        description:
            "Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.",
        icon: "/images/partnership/layanan.png",
    },
    {
        title: "Dukungan Teknologi Terdepan",
        description:
            "GOCAS dilengkapi dengan mesin sewa power bank modern yang mudah diakses melalui aplikasi. Proses pengembalian pun sangat simpel.",
        icon: "/images/partnership/teknologi.png",
    },
    {
        title: "Dukungan dan Pemeliharaan",
        description:
            "Tim kami akan memberikan dukungan penuh, mulai dari pemasangan mesin hingga pemeliharaan berkala.",
        icon: "/images/partnership/maintenance.png",
    },
    {
        title: "Memperluas Jangkauan Bisnis",
        description:
            "Dengan bermitra, lokasi bisnis Anda akan ditampilkan dalam aplikasi GOCAS, memperbesar potensi kunjungan dan engagement dari pengguna baru.",
        icon: "/images/partnership/jaringan.png",
    },
    {
        title: "Revenue Sharing",
        description:
            "Dapatkan tambahan pendapatan dengan sistem bagi hasil yang menarik.",
        icon: "/images/partnership/revenue.png",
    },
];

const ScrollableCards = () => {
    return (
        <Box w="100%" p={4} overflowX="auto">
            <Flex gap={4}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        minW="250px"
                        borderRadius="md"
                        boxShadow="lg"
                        p={4}
                        bg="white"
                    >
                        <VStack align="flex-start" spacing={2}>
                            <Image src={card.icon} w={"50px"} h={"50px"} alt={card.title} />
                            <Text fontWeight="bold" color={"yellow.500"} fontSize="lg">
                                {card.title}
                            </Text>
                            <Text fontSize="sm">{card.description}</Text>
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ScrollableCards;
