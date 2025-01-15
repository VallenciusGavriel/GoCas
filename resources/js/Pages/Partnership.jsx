import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Form from "@/Components/Partnership/Form.jsx";
import ScrollableCards from "@/Components/Partnership/ScrollableCards.jsx";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import { useLanguage } from "@/Context/LanguageContext";
import { partnershipTranslations } from "@/Translates/partnershipTranslation";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import BackgroundHero from "../../../public/images/partnership/bg.png";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

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

const Partnership = () => {
    const { language } = useLanguage();
    const t = partnershipTranslations[language];

    return (
        <div className={"overflow-x-hidden"}>
            <Navbar />
            <Head title="Partnership" />

            {/* Hero Section */}
            <MotionFlex
                spacing={0}
                bgImage={BackgroundHero}
                bgSize="cover"
                bgPos="center"
                justifyContent={"end"}
                alignItems={"end"}
                direction={{ base: "column-reverse", md: "row" }}
                px={"10%"}
                mt={"60px"}
                pt={"78px"}
                pb={"10%"}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Box
                    h={"full"}
                    w={{ base: "full", lg: "60%" }}
                    rounded={"xl"}
                    mt={{ base: "24px", xl: "64px" }}
                    px={{ base: "0px", xl: "64px" }}
                    py={{ base: "24px", xl: "32px" }}
                >
                    <HeaderText
                        px={0}
                        iconColor={"brown"}
                        size={"large"}
                        withIcon={false}
                        className={
                            "xl:mt-0 mt-2 pl-2 pb-2 pt-4"
                        }
                        inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}
                    >
                        {t.heroTitle}
                    </HeaderText>
                    <Text
                        fontFamily="poppins"
                        mt={"24px"}
                        className={
                            "md:text-xl text-xs pl-2 py-1"
                        }
                        color={"black"}
                    >
                        {t.description}
                    </Text>
                </Box>
            </MotionFlex>

            {/* Partner Section */}
            <MotionVStack
                spacing={0}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                py={"30px"}
                className={"rounded-b-3xl"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
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
                <Flex
                    bgColor={"#F0F0F0"}
                    w={"full"}
                    mt={"24px"}
                    py={"40px"}
                    alignItems={"center"}
                    flexDirection={"column"}
                >
                    <HeaderText
                        px={0}
                        size="large"
                        withIcon={false}
                        iconColor="black"
                        className={"text-center"}
                        topMargin={4}
                        inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}
                    >
                        {t.comingSoon}
                    </HeaderText>
                    <Text mt={"24px"}>{t.partnerVisible}</Text>
                </Flex>
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
                <ScrollableCards />
            </MotionVStack>

            {/* Testimonials Section */}
            {/*<MotionVStack*/}
            {/*    spacing={0}*/}
            {/*    alignItems={"start"}*/}
            {/*    justifyContent={"start"}*/}
            {/*    px={"10%"}*/}
            {/*    className={"rounded-3xl"}*/}
            {/*    py={"64px"}*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    viewport={{ once: true }}*/}
            {/*    variants={fadeInUp}*/}
            {/*    transition={{ duration: 1 }}*/}
            {/*>*/}
            {/*    <HeaderText*/}
            {/*        px={0}*/}
            {/*        iconColor={"black"}*/}
            {/*        size={"large"}*/}
            {/*        withIcon={false}*/}
            {/*        inputclass={"xl:!text-4xl md:!text-2xl !text-xl"}*/}
            {/*    >*/}
            {/*        Testimoni Partner*/}
            {/*    </HeaderText>*/}
            {/*    <Flex*/}
            {/*        direction={"column"}*/}
            {/*        my={"auto"}*/}
            {/*        w={"full"}*/}
            {/*        alignItems={"center"}*/}
            {/*        justifyContent={"center"}*/}
            {/*    >*/}
            {/*        <Testimoni />*/}
            {/*    </Flex>*/}
            {/*</MotionVStack>*/}

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
                        me={{ base: "0px", xl: "12px" }}
                        mb={{ base: "12px", xl: "0px" }}
                    >
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
                        <Text>{t.applicationFormDescription}</Text>
                    </Box>
                    <Form />
                </Flex>
            </MotionFlex>

            <Footer />
        </div>
    );
};

export default Partnership;
