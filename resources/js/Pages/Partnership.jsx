import { Suspense, lazy, useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useLanguage } from "@/Context/LanguageContext";
import { partnershipTranslations } from "@/Translates/partnershipTranslation";
import languages from "@/Translates/languages.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lazy load heavy components
const Navbar = lazy(() => import("@/Components/Navbar/Navbar"));
const Footer = lazy(() => import("@/Components/Footer/Footer"));
const Form = lazy(() => import("@/Components/Partnership/Form.jsx"));
const ScrollableCards = lazy(() => import("@/Components/Partnership/ScrollableCards.jsx"));
const HeaderText = lazy(() => import("@/Components/Text/HeaderText.jsx"));

// Convert images to WebP format
const BackgroundHero = "/images/partnership/bg.webp";
const FormImg = "/images/partnership/form.webp";
const Hand = "/images/partnership/hand.webp";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionButton = motion(Button);

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Partnership = ({ partners, meta }) => {
    const { language } = useLanguage();
    const t = partnershipTranslations[language];

    return (
        <div className={"overflow-x-hidden"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
            </Suspense>
            <Head title="Partnership" />

            {/* Hero Section */}
            <MotionFlex
                spacing={0}
                bgImage={BackgroundHero}
                bgSize="cover"
                bgPos="center"
                justifyContent={"center"}
                alignItems={"center"}
                direction={{ base: "column-reverse", md: "row" }}
                p={"10%"}
                mt={"60px"}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Box
                    h={"full"}
                    w={"full"}
                    maxW={"1200px"}
                    rounded={"xl"}
                    mt={{ base: "24px", xl: "64px" }}
                    py={{ base: "24px", xl: "32px" }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderText
                            px={0}
                            iconColor={"brown"}
                            size={"large"}
                            withIcon={false}
                            className={"xl:mt-0 mt-2 pl-2 pb-2 pt-4"}
                            inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}
                            textAlign={{ base: "center", xl: "start" }}
                        >
                            {t.heroTitle}
                        </HeaderText>
                    </Suspense>
                    <Flex
                        alignItems={"center"}
                        justifyContent={{ base: "center", xl: "start" }}
                    >
                        <Link href="/location">
                            <MotionButton
                                bgGradient="linear(to-r, #6EA93C, #25893C)"
                                color="white"
                                _hover={{
                                    bgGradient:
                                        "linear(to-r, green.500, teal.600)",
                                }}
                                borderRadius="full"
                                fontSize="lg"
                                fontFamily="poppins"
                                fontWeight="bold"
                                px={8}
                                py={6}
                                mt={{ base: 6, md: 12 }}
                                mb={{ base: 10, md: 28 }}
                                boxShadow="md"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Text
                                    fontFamily="poppins"
                                    className={"md:text-lg text-xs"}
                                >
                                    {languages[language]["button_text"]}
                                </Text>
                            </MotionButton>
                        </Link>
                    </Flex>
                </Box>
                <Image
                    src={Hand}
                    loading="lazy"
                    alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                    boxSize={{ base: "90%", xl: "40%" }}
                    m={2}
                    mt={10}
                    mb={6}
                />
            </MotionFlex>

            {/* Partner Section */}
            <MotionVStack
                spacing={0}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                py={"30px"}
                gap={4}
                mx={2}
                className={"rounded-b-3xl"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <HeaderText
                        px={0}
                        size="large"
                        withIcon={false}
                        iconColor="black"
                        className={"text-center"}
                        topMargin={4}
                        inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}
                    >
                        {t.partnerTitle}
                    </HeaderText>
                </Suspense>
                {partners.length > 0 ? (
                    <Box w="full">
                        <Slider
                            {...settings}
                            slidesToShow={
                                partners.length < 5 ? partners.length : 4
                            } // untuk jumlah slidenya
                            slidesToScroll={
                                partners.length < 5 ? partners.length : 4
                            } // untuk jumlah scrollnya
                            autoplay={partners.length >= 5}
                            autoplaySpeed={3000}
                        >
                            {partners.map((partner) => (
                                <Box
                                    key={partner.id}
                                    p="5"
                                    borderBottom="1px"
                                    borderColor="gray.200"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="200px"
                                >
                                    {partner.image_url && (
                                        <Image
                                            src={partner.image_url}
                                            alt={partner.name}
                                            boxSize="100%"
                                            objectFit="contain"
                                            borderRadius="lg"
                                            maxH="150px"
                                        />
                                    )}
                                    <Text
                                        fontSize="md"
                                        fontWeight="bold"
                                        textAlign="center"
                                        mt={2}
                                    >
                                        {partner.name}
                                    </Text>
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                ) : (
                    <Flex
                        bgColor="#F0F0F0"
                        w="full"
                        mt="24px"
                        py="40px"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            <HeaderText
                                px={0}
                                size="large"
                                withIcon={false}
                                iconColor="black"
                                className="text-center"
                                topMargin={4}
                                inputclass="xl:!text-6xl md:!text-5xl !text-2xl"
                            >
                                {t.comingSoon}
                            </HeaderText>
                        </Suspense>
                        <Text mt="24px">{t.partnerVisible}</Text>
                    </Flex>
                )}
            </MotionVStack>

            {/* Benefits Section */}
            <MotionVStack
                spacing={0}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                py={"64px"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <HeaderText
                        px={0}
                        size="small"
                        withIcon={false}
                        iconColor="black"
                        className={"text-center"}
                        topMargin={4}
                        inputclass={"xl:!text-4xl md:!text-2xl !text-xl"}
                    >
                        {t.benefitsTitle}
                    </HeaderText>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ScrollableCards />
                </Suspense>
            </MotionVStack>

            {/* Partner Application Form Section */}
            <MotionFlex
                spacing={0}
                w={"full"}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                bgColor={"#17a64e"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Flex
                    direction={"column"}
                    my={"48px"}
                    py={"40px"}
                    px={{ base: "16px", xl: "40px" }}
                    w={"full"}
                    alignItems={"start"}
                    justifyContent={"center"}
                    bgColor={"white"}
                    flexDir={{ base: "column", xl: "row" }}
                >
                    <Box
                        w={{ base: "full", xl: "50%" }}
                        me={{ base: "0px", xl: "12px" }}
                        mb={{ base: "12px", xl: "0px" }}
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            <HeaderText
                                px={0}
                                iconColor={"black"}
                                size={"large"}
                                withIcon={false}
                                inputclass={
                                    "xl:!text-4xl md:!text-2xl !text-xl mb-2"
                                }
                            >
                                {t.applicationFormTitle}
                            </HeaderText>
                        </Suspense>
                        <Text>{t.applicationFormDescription}</Text>
                        <Image
                            loading="lazy"
                            src={FormImg}
                            alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                            boxSize="90%"
                            m={2}
                            mt={10}
                            mb={6}
                        />
                    </Box>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Form />
                    </Suspense>
                </Flex>
            </MotionFlex>

            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Partnership;