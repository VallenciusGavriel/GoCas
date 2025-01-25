import {
    Box,
    Button, Flex,
    Grid,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import AppStore from "../../../../public/images/navbar/appstore.png";
import GPlay from "../../../../public/images/navbar/gplay.png";
import App from "../../../../public/images/home/app.png";
import { useLanguage } from "../../Context/LanguageContext";
import languages from "../../Translates/languages.json";
import QRCode from "./../../../../public/images/home/qr-code.png";
import HeaderText from "./../Text/HeaderText";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

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

const redirect = (url) => {
    window.location.href=url
}

const Home1 = () => {
    const { language } = useLanguage();
    return (
        <MotionBox
            pt={{base: 0, xl: 12}}
            maxWidth="1200px"
            mx="auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
        >
            <Grid
                templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                height="80%"
                width="full"
                zIndex="10"
            >
                {/* Left Section */}
                <MotionBox
                    display="flex"
                    flexDirection="column"
                    justifyContent={{ base: "center", xl: "flex-end" }}
                    alignItems={{ base: "center", xl: "flex-start" }}
                    textAlign={{ base: "center", xl: "left" }}
                    p="4"
                    height="100%"
                    zIndex="10"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInLeft}
                    transition={{ duration: 1 }}
                >
                    <HeaderText
                        iconColor="brown"
                        size="normal"
                        withIcon={false}
                        topMargin={40}
                        inputclass={"xl:!text-5xl md:!text-3xl !text-lg"}
                        px="0px"
                    >
                        {languages[language]["headline_1"]}{" "}
                        {/* Isi daya tanpa ribet */}
                    </HeaderText>
                    <HeaderText
                        iconColor="brown"
                        size="large"
                        withIcon={false}
                        topMargin={6}
                        inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
                        px="0px"
                    >
                        {languages[language]["headline_2"]} {/* kapanpun */}
                    </HeaderText>
                    <HeaderText
                        iconColor="brown"
                        size="large"
                        withIcon={false}
                        topMargin={6}
                        inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
                        px="0px"
                    >
                        {languages[language]["headline_3"]} {/* dimanapun */}
                    </HeaderText>
                    <Text
                        mt={6}
                        fontSize="lg"
                        fontFamily="poppins"
                        fontWeight="bold"
                    >
                        {languages[language]["description"]}{" "}
                        {/* GoCas Indonesia adalah brand penyewaan... */}
                    </Text>
                    <Link href="/location">
                        <MotionButton
                            bgGradient="linear(to-r, #6EA93C, #25893C)"
                            color="white"
                            _hover={{
                                bgGradient: "linear(to-r, green.500, teal.600)",
                            }}
                            borderRadius="full"
                            fontSize="lg"
                            fontFamily="poppins"
                            fontWeight="bold"
                            px={8}
                            py={6}
                            mt={{ base: 6, xl: 12 }}
                            mb={{ base: 10, xl: 28 }}
                            boxShadow="md"
                            w={ "full" }
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Text
                                fontFamily="poppins"
                                className={"md:text-lg text-xs"}
                            >
                                {languages[language]["button_text"]}{" "}
                                {/* Temukan GoCas terdekat */}
                            </Text>
                        </MotionButton>
                    </Link>
                </MotionBox>

                {/* Right Section */}
                <MotionBox
                    display={"flex"}
                    justifyContent={{base: "center", xl: "end"}}
                    py={{ base: "4", xl: "28" }}
                    width={{ base: "100%", xl: "auto" }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInRight}
                    transition={{ duration: 1 }}
                >
                    <VStack
                        justifyContent={{ base: "space-evenly", xl: "flex-end" }}
                        spacing={4}
                    >
                        <MotionImage
                            src={App}
                            alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                            mb={2}
                            h={"400px"}
                            loading="lazy"
                            objectFit="contain"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <Flex direction={{base: "column", xl: "row"}} gap={2}>
                            <div
                                className={"cursor-pointer"}
                                onClick={() => redirect("https://play.google.com/store/apps/details?id=so.dian.gocasid")}
                            >
                                <MotionImage
                                    src={GPlay}
                                    alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                    w={"200px"}
                                    loading="lazy"
                                    objectFit="contain"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div
                                className={"cursor-pointer"}
                                onClick={() => redirect("https://apps.apple.com/id/app/gocas/id6738688391?l=id")}
                            >
                                <MotionImage
                                    src={AppStore}
                                    alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                    w={"200px"}
                                    loading="lazy"
                                    objectFit="contain"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </Flex>
                        {/*<MotionImage*/}
                        {/*    src={QRCode}*/}
                        {/*    alt="QR Code"*/}
                        {/*    boxSize={{ base: "100px", md: "150px" }}*/}
                        {/*    objectFit="contain"*/}
                        {/*loading="lazy"*/}
                        {/*    whileHover={{ rotate: 360 }}*/}
                        {/*    transition={{ duration: 0.5 }}*/}
                        {/*/>*/}
                    </VStack>
                </MotionBox>
            </Grid>
        </MotionBox>
    );
};

export default Home1;
