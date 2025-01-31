import { ChatIcon } from "@chakra-ui/icons";
import {
    Accordion,
    Box,
    Heading,
    IconButton,
    Text,
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../../Context/LanguageContext";
import FAQItem from "./FAQItem";

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

const faqData = {
    EN: [
        {
            question: "What is GoCas?",
            answer: "GoCas is a power bank rental service. Simply open the GoCas app, find the nearest GoCas Station, and rent/return a power bank with just a few taps.",
        },
        {
            question: "How do I rent/return a power bank?",
            answer: "It's simple! Just open the GoCas app, find the nearest GoCas Station, and rent/return a power bank with just a few taps.",
        },
        {
            question: "How do I find a GoCas rental station?",
            answer: "Open the GoCas app and use the search feature to find the nearest GoCas Station from your location.",
        },
        {
            question: "How long can I rent a power bank?",
            answer: "Rent according to your needs up to a maximum of 24 hours. Please note, GoCas power banks can only be recharged at GoCas Stations.",
        },
        {
            question: "What should I do if the power bank doesn't work?",
            answer: "If the power bank you rented is not working, immediately return it to the GoCas station and report it through the app for further assistance.",
        },
    ],
    ID: [
        {
            question: "Apa itu GoCas?",
            answer: "GoCas adalah layanan penyewaan power bank. Anda cukup membuka aplikasi GoCas, mencari GoCas Station terdekat, dan menyewa/mengembalikan power bank hanya dengan beberapa ketukan.",
        },
        {
            question: "Bagaimana cara menyewa/mengembalikan power bank?",
            answer: "Sangat mudah! Cukup buka aplikasi GoCas, cari lokasi GoCas Station terdekat, dan sewa/kembalikan power bank hanya dengan beberapa ketukan.",
        },
        {
            question: "Bagaimana cara menemukan stasiun penyewaan GoCas?",
            answer: "Buka aplikasi GoCas dan gunakan fitur pencarian untuk menemukan stasiun penyewaan GoCas terdekat dari lokasi Anda.",
        },
        {
            question: "Berapa lama saya bisa menyewa power bank?",
            answer: "Sewa sesuai kebutuhan Anda hingga maksimal 24 jam. Perlu diingat, power bank GoCas hanya dapat diisi ulang di GoCas Station.",
        },
        {
            question:
                "Apa yang harus dilakukan jika power bank tidak berfungsi?",
            answer: "Jika power bank yang Anda sewa tidak berfungsi, segera kembalikan ke stasiun GoCas dan lapor melalui aplikasi untuk mendapatkan bantuan lebih lanjut.",
        },
    ],
    CH: [
        {
            question: "什么是 GoCas？",
            answer: "GoCas 是一个充电宝租赁服务。只需打开 GoCas 应用，找到最近的 GoCas 站点，几次点击即可租用/归还充电宝。",
        },
        {
            question: "如何租用/归还充电宝？",
            answer: "很简单！只需打开 GoCas 应用，找到最近的 GoCas 站点，几次点击即可完成充电宝的租用/归还。",
        },
        {
            question: "如何找到 GoCas 租赁站？",
            answer: "打开 GoCas 应用并使用搜索功能，从您所在的位置找到最近的 GoCas 站点。",
        },
        {
            question: "充电宝可以租用多久？",
            answer: "根据您的需要租期最长为 24 小时。请注意，GoCas 移动电源只能在 GoCas 充电站充电",
        },
        {
            question: "如果充电宝无法使用，我该怎么办？",
            answer: "如果您租用的充电宝无法使用，请立即将其归还到 GoCas 站点，并通过应用程序报告以获得进一步的帮助。",
        },
    ],
};

const Home4 = () => {
    const { language } = useLanguage();

    return (
        <MotionBox
            p={6}
            maxW={"1200px"}
            mx={"auto"}
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
                    {language === "EN"
                        ? "Frequently Asked Questions (FAQ)"
                        : language === "CH"
                        ? "常见问题 (FAQ)"
                        : "Pertanyaan yang Sering Diajukan (FAQ)"}
                </MotionHeading>

                {/* FAQ Accordion */}
                <Accordion allowToggle>
                    {faqData[language].map((faq, index) => (
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
                        {language === "EN"
                            ? "Can't find what you're looking for?"
                            : language === "CH"
                            ? "找不到您想要的？"
                            : "Tidak dapat menemukan pertanyaan Anda?"}
                    </Text>
                    <Text fontFamily="Poppins">
                        {language === "EN"
                            ? "We'd love to talk to you"
                            : language === "CH"
                            ? "我们很乐意与您交谈"
                            : "Chat kami di bawah ini"}
                    </Text>

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
