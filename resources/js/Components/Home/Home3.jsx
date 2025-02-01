import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLanguage } from "../../Context/LanguageContext";
import HeaderText from "../Text/HeaderText";
import FeatureCard from "./FeatureCard";
import { features, stepsBorrowPelanggan, stepsReturn } from "./homeData";
import StepList from "./StepList";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionFlex = motion(Flex);

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const customIcon = new L.Icon({
    iconUrl: "/images/location/person-standing.svg",
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [50, 50],
});

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const Home3 = () => {
    const [position, setPosition] = useState(null);
    const { language } = useLanguage();

    // Get the user's current location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (location) => {
                    setPosition({
                        lat: location.coords.latitude,
                        lng: location.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error fetching location", error);
                }
            );
        }
    }, []);

    const icon = new L.Icon({
        iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
        iconSize: [38, 38],
    });

    // Translation Data
    const translations = {
        EN: {
            whyChoose: "Why Choose GoCas?",
            findUs: "Find us easily",
            exploreLocations: "Explore all locations",
            howToRentCustomer: "How to Rent a Power Bank",
            howToReturn: "How to Return Power Bank",
            introText:
                "Wherever you go, don't worry about running out of battery! You can find GoCas Stations in your favorite spots. Visit the nearest GoCas Station and start charging!",
        },
        ID: {
            whyChoose: "Kenapa memilih GoCas?",
            findUs: "Temukan kami dengan mudah",
            exploreLocations: "Telusuri semua lokasi",
            howToRentCustomer: "Cara Sewa\nPower bank",
            howToReturn: "Cara Pengembalian\nPower bank",
            introText:
                "Kemanapun kamu pergi, tidak perlu khawatir kehabisan baterai! Kamu bisa temukan GoCas Station di tempat-tempat favorit mu. Kunjungi GoCas Station terdekat dan mulai mengisi daya!",
        },
        CH: {
            whyChoose: "为什么选择 GoCas？",
            findUs: "轻松找到我们",
            exploreLocations: "探索所有位置",
            howToRentCustomer: "如何租用移动电源",
            howToReturn: "如何退回移动电源",
            introText:
                "无论你走到哪里，都不必担心电量耗尽！你可以在你喜欢的地点找到 GoCas 站点。访问最近的 GoCas 站点并开始充电！",
        },
    };

    return (
        <Box p={{ base: 2, sm: 6 }}>
            {/* Features Section */}
            <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <HeaderText
                    iconColor="black"
                    size="normal"
                    textAlign="center"
                    mx="auto"
                    topMargin={10}
                >
                    {translations[language].whyChoose}{" "}
                    {/* Use the translation */}
                </HeaderText>
                <MotionGrid
                    mx={"auto"}
                    maxW={"1200px"}
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(4, 1fr)",
                    }}
                    justifyItems="center"
                    alignItems="center"
                    align="center"
                    p={2}
                    gap={{
                        base: 4,
                        xl: 20,
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <MotionBox
                            key={index}
                            maxW={{ base: "300px", xl: "500px" }}
                            minW={{ base: "100px", xl: "200px" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={
                                    language === "EN"
                                        ? feature.title.EN
                                        : language === "CH"
                                        ? feature.title.CH
                                        : feature.title.ID
                                }
                                description={
                                    language === "EN"
                                        ? feature.description.EN
                                        : language === "CH"
                                        ? feature.description.CH
                                        : feature.description.ID
                                }
                            />
                        </MotionBox>
                    ))}
                </MotionGrid>
            </MotionBox>

            {/* Steps Section */}
            <MotionFlex
                wrap="wrap"
                direction={{ base: "column", xl: "row" }}
                gap={{ base: 20, md: 6 }}
                justify="center"
                align="end"
                maxW="1200px"
                mx="auto"
                my="auto"
                mt={20}
                mb={28}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                {[
                    {
                        title:
                            language === "EN"
                                ? "How to Rent a Power Bank"
                                : language === "CH"
                                ? "如何租用移动电源"
                                : "Cara Sewa\nPower Bank",
                        steps: stepsBorrowPelanggan[language],
                    },
                    // {
                    //     title: language === "EN" ? "How to Rent as a Guest" : "Tata Cara Penyewaan Guest",
                    //     steps: stepsBorrowGuest[language],
                    // },
                    {
                        title:
                            language === "EN"
                                ? "How to Return Power Bank"
                                : language === "CH"
                                ? "如何退回移动电源"
                                : "Cara Pengembalian\nPower Bank",
                        steps: stepsReturn[language],
                    },
                ].map((item, index) => (
                    <MotionBox
                        key={index}
                        flex={{ base: "1 1 100%", xl: "1 1 30%" }}
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                        minHeight="100%"
                        mt={10}
                        mx="auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HeaderText
                            iconColor="black"
                            size="normal"
                            textAlign="center"
                            mx="auto"
                            inputclass={
                                "xl:!text-4xl !text-3xl max-w-[550px]"
                            }
                        >
                            {item.title} {/* Use the translated title */}
                        </HeaderText>
                        <Box
                            bg="white"
                            p={10}
                            borderRadius="xl"
                            shadow="md"
                            maxW={{ base: "300px", sm: "650px" }}
                            w="full"
                            mt={10}
                            mx="auto"
                            opacity="80%"
                            minHeight="500px"
                        >
                            <StepList steps={item.steps} />
                        </Box>
                    </MotionBox>
                ))}
            </MotionFlex>

            {/* Map Section */}
            <MotionBox
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                    py={10}
                    mt={8}
                    mx={"auto"}
                    maxW="1200px"
                    w="full"
                    gap={20}
                >
                    <MotionBox
                        width={{ base: "100%", md: "40%" }}
                        height="300px"
                        borderRadius="xl"
                        overflow="hidden"
                        variants={fadeInLeft}
                        transition={{ duration: 1 }}
                    >
                        {position ? (
                            <MapContainer
                                center={position}
                                zoom={15}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    zIndex: 0,
                                }}
                            >
                                <TileLayer
                                    url="https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=voBFXHak9EAswlGQ7NiNqS7OJ1gJHfhvgjhEJ5nCmQ81OdZDZFM20QIaKvMqfsn6"
                                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position} icon={customIcon}>
                                    <Popup>Your current location</Popup>
                                </Marker>
                            </MapContainer>
                        ) : (
                            <Text>Loading map...</Text>
                        )}
                    </MotionBox>
                    <MotionBox
                        width={{ base: "100%", md: "60%" }}
                        textAlign={{ base: "center", md: "start" }}
                        maxW="1200px"
                        px={[4, 0]}
                        mt={4}
                        variants={fadeInRight}
                        transition={{ duration: 1 }}
                    >
                        <HeaderText
                            iconColor="black"
                            size="normal"
                            textAlign={{base: "center", md: "start"}}
                            px={0}
                        >
                            {translations[language].findUs}{" "}
                            {/* Use the translated text */}
                        </HeaderText>
                        <Text
                            color="black"
                            fontSize="md"
                            fontFamily="Poppins"
                            mt={12}
                            mb={6}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            {translations[language].introText}{" "}
                            {/* Use translated intro text */}
                        </Text>
                        <Link href="/location">
                            <Button
                                colorScheme="yellow"
                                bg="yellow.400"
                                color="black"
                                size="lg"
                                fontWeight="bold"
                                borderRadius="full"
                            >
                                {translations[language].exploreLocations}{" "}
                                {/* Use translated button text */}
                            </Button>
                        </Link>
                    </MotionBox>
                </Flex>
            </MotionBox>
        </Box>
    );
};

export default Home3;
