import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import StyledDescription from "@/Components/StyleDescription";
import {
    Box,
    Flex,
    Image,
    Text,
    useBreakpointValue,
    VStack,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import Background from "../../../public/images/about/bg1.png";
import BackgroundPhone from "../../../public/images/about/bg2.png";
import Community from "../../../public/images/about/community.png";
import EcoFriendly from "../../../public/images/about/ecofriendly.png";
import PBShare from "../../../public/images/about/pbshare.png";
import { useLanguage } from "../Context/LanguageContext";
import { aboutTranslations } from "../Translates/aboutTranslation";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const About = () => {
    const { language } = useLanguage();
    const t = aboutTranslations[language];
    const size = useBreakpointValue({
        base: { height: "100vh", width: "auto" },
        xl: { width: "full", height: "auto" },
    });
    // console.log("Current language:", language);

    return (
        <div className={"overflow-x-hidden"}>
            <Navbar />
            <Head title={t.title} />
            <MotionBox
                minH={"100vh"}
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 1 }}
            >
                <MotionVStack
                    spacing={0}
                    bgImage={{ base: BackgroundPhone, md: Background }}
                    mb={2}
                    minH={"100vh"}
                    h={size.height}
                    w={size.width}
                    bgSize="cover"
                    bgPos={{ base: "left", md: "center" }}
                    alignItems={"start"}
                    justifyContent={"end"}
                    px={"10%"}
                    pt={"138px"}
                    pb={"10%"}
                    className={"rounded-b-3xl"}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                    transition={{ duration: 1 }}
                >
                    <Box w={{ base: "full", lg: "50%" }}>
                        <HeaderText
                            px={2}
                            iconColor={"brown"}
                            size={"large"}
                            withIcon={false}
                            inputclass={
                                "xl:!text-6xl md:!text-5xl !text-3xl py-2"
                            }
                        >
                            {t.header}
                        </HeaderText>
                        <Text
                            fontFamily="poppins"
                            mt={"24px"}
                            className={"md:text-xl text-sm pl-2 py-2"}
                        >
                            {t.description}
                        </Text>
                    </Box>
                </MotionVStack>
            </MotionBox>

            <MotionVStack
                alignItems={"start"}
                justifyContent={"center"}
                px={"10%"}
                py={"48px"}
                minH={"50vh"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}
                transition={{ duration: 1 }}
            >
                <HeaderText
                    px={0}
                    iconColor={"green"}
                    size={"large"}
                    inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"}
                    withIcon={false}
                >
                    {t.commitmentTitle}
                </HeaderText>
                <MotionFlex
                    mt={"48px"}
                    gap={8}
                    direction={{ md: "row", base: "column" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <VStack
                        alignItems={"start"}
                        justifyContent={"start"}
                        w={{ base: "100%", md: "50%" }}
                    >
                        <MotionImage
                            src={EcoFriendly}
                            alt={t.ecoFriendly.alt}
                            w="100px"
                            objectFit="contain"
                            loading="lazy"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        />
                        <HeaderText
                            px={0}
                            topMargin={12}
                            iconColor={"black"}
                            size={"normal"}
                            inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"}
                            withIcon={false}
                        >
                            {t.ecoFriendly.title}
                        </HeaderText>
                        <Text fontFamily="poppins">
                            {t.ecoFriendly.description}
                        </Text>
                    </VStack>
                    <VStack
                        alignItems={"start"}
                        justifyContent={"start"}
                        w={{ base: "100%", md: "50%" }}
                    >
                        <MotionImage
                            src={Community}
                            alt={t.community.alt}
                            w="100px"
                            objectFit="contain"
                            loading="lazy"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        />
                        <HeaderText
                            px={0}
                            topMargin={12}
                            iconColor={"black"}
                            size={"normal"}
                            inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"}
                            withIcon={false}
                        >
                            {t.community.title}
                        </HeaderText>
                        <StyledDescription text={t.community.description} />
                    </VStack>
                </MotionFlex>
            </MotionVStack>

            <MotionVStack
                alignItems={"start"}
                bgColor={"#fbd00f"}
                px={"10%"}
                py={"48px"}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}
                transition={{ duration: 1 }}
            >
                <HeaderText
                    px={0}
                    iconColor={"black"}
                    size={"large"}
                    inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"}
                    withIcon={false}
                >
                    {t.services.title}
                </HeaderText>
                <MotionBox
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="xl"
                    my={"48px"}
                    p={8}
                    backgroundColor="white"
                    boxShadow="xl"
                    w="full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <Flex gap={8} direction={{ md: "row", base: "column" }}>
                        <Image
                            src={PBShare}
                            alt="Powerbank Sharing"
                            w="100px"
                            objectFit="contain"
                            loading="lazy"
                        />
                        <VStack alignItems={"start"} justifyContent={"start"}>
                            <HeaderText
                                px={0}
                                topMargin={10}
                                iconColor={"black"}
                                size={"normal"}
                                withIcon={false}
                                inputclass={
                                    "xl:!text-3xl md:!text-3xl !text-2xl"
                                }
                            >
                                {t.services.title2}
                            </HeaderText>
                            <Text fontFamily="poppins">
                                {t.services.description}
                            </Text>
                        </VStack>
                    </Flex>
                </MotionBox>
            </MotionVStack>
            <Footer />
        </div>
    );
};

export default About;
