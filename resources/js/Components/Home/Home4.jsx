import { ChatIcon } from "@chakra-ui/icons";
import {
    Accordion,
    Box,
    Heading,
    IconButton,
    Text,
    VStack,
} from "@chakra-ui/react";
import FAQItem from "./FAQItem";
import { motion } from "framer-motion";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);
const MotionIconButton = motion(IconButton);

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

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

const Home4 = () => {
    return (
        <MotionBox
            p={6}
            rounded="xl"
            bg="white"
            boxShadow="base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
        >
            <MotionVStack
                spacing={4}
                align="stretch"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                {/* Animated Heading */}
                <MotionHeading
                    as="h1"
                    size="xl"
                    textAlign="center"
                    fontFamily="Poppins"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Pertanyaan yang Sering Diajukan (FAQ)
                </MotionHeading>

                {/* FAQ Accordion */}
                <Accordion allowToggle>
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </Accordion>

                {/* Chat Section */}
                <MotionBox
                    pt={10}
                    textAlign="center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Text mb={2} fontFamily="Poppins">
                        Tidak dapat menemukan yang Anda cari?
                    </Text>
                    <Text fontFamily="Poppins">Kami ingin berbicara dengan Anda</Text>
                    <a
                        href="https://wa.me/6282188886665"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MotionIconButton
                            aria-label="Chat with us"
                            icon={<ChatIcon />}
                            size="lg"
                            isRound
                            colorScheme="blue"
                            mt={4}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                        />
                    </a>
                </MotionBox>
            </MotionVStack>
        </MotionBox>
    );
};

export default Home4;
