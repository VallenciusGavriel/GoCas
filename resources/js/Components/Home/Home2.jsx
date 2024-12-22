import { Box, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLanguage } from "../../Context/LanguageContext";
import languages from "../../Translates/languages.json";
import HeaderText from "../Text/HeaderText";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionLink = motion(Link);

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const Home2 = () => {
    const { language } = useLanguage();
    return (
        <MotionBox
            p={{ base: 10, md: 4 }}
            color="white"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1 }}
        >
            <MotionBox
                maxWidth="1500px"
                mx="auto"
                display="flex"
                flexDirection={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={{ base: 2, md: 4, lg: 8 }}
                my={{ base: 5, md: 10, lg: 14 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                {/* Left Section */}
                <MotionBox
                    flex={{ base: "auto", md: 1 }}
                    pr={{ base: 0, md: 4, lg: 6 }}
                    variants={fadeInLeft}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <HeaderText
                        iconColor="green"
                        size="normal"
                        inputclass={"xl:!text-5xl md:!text-5xl !text-3xl"}
                        px="0px"
                    >
                        {languages[language]["header_1"]}{" "}
                        {/* HIDUPKAN PERANGKATMU DENGAN */}
                    </HeaderText>
                    <HeaderText
                        iconColor="brown"
                        size="normal"
                        topMargin={10}
                        inputclass={"xl:!text-5xl md:!text-3xl !text-lg"}
                        px="0px"
                    >
                        {languages[language]["header_2"]}{" "}
                        {/* #GOCASinSekarang */}
                    </HeaderText>
                </MotionBox>

                {/* Right Section */}
                <MotionBox
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    flex={{ base: "auto", md: 1 }}
                    pl={{ base: 0, lg: 6 }}
                    variants={fadeInRight}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <HeaderText
                        iconColor="black"
                        size="small"
                        topMargin={{ base: 20, md: 10, lg: 0 }}
                        textStyle={{ base: "headline", md: "subheadline" }}
                        px="0px"
                    >
                        {languages[language]["greeting"]}{" "}
                        {/* SALAM KENAL, Sobat GOCAS! */}
                    </HeaderText>
                    <MotionText
                        fontSize={{ base: "sm", md: "md" }}
                        fontFamily="poppins"
                        textAlign="justify"
                        color="black"
                        pr={{ base: 0, md: 4, lg: 24 }}
                        mb={6}
                        variants={fadeInUp}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {languages[language]["intro_text"]}{" "}
                        {/* Hai! Kami GoCas Indonesia... */}
                    </MotionText>
                    <MotionLink
                        color="black"
                        href="/about"
                        fontFamily="poppins"
                        fontWeight="bold"
                        _hover={{ textDecoration: "underline" }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {languages[language]["read_more"]}{" "}
                        {/* Baca selengkapnya */}
                    </MotionLink>
                </MotionBox>
            </MotionBox>
        </MotionBox>
    );
};

export default Home2;
