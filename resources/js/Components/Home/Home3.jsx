import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import HeaderText from "../Text/HeaderText";
import FeatureCard from "./FeatureCard";
import {
    features,
    stepsBorrowGuest,
    stepsBorrowPelanggan,
    stepsReturn,
} from "./homeData";
import StepList from "./StepList";
import { motion } from "framer-motion";

// Framer Motion Wrappers
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionFlex = motion(Flex);

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

const Home3 = () => {
    const [position, setPosition] = useState(null);

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
                    Kenapa memilih GoCas?
                </HeaderText>
                <MotionGrid
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
                            maxW={{ base: "200px", xl: "500px" }}
                            minW={{ base: "100px", xl: "200px" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
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
                align="center"
                maxW="1500px"
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
                        title: "Tata Cara Penyewaan Guest",
                        steps: stepsBorrowGuest,
                    },
                    {
                        title: "Tata Cara Penyewaan Pelanggan",
                        steps: stepsBorrowPelanggan,
                    },
                    {
                        title: "Tata Cara Pengembalian",
                        steps: stepsReturn,
                    },
                ].map((item, index) => (
                    <MotionBox
                        key={index}
                        flex={{ base: "1 1 100%", xl: "1 1 30%" }}
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
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
                                "xl:!text-5xl md:!text-4xl !text-3xl max-w-[550px]"
                            }
                        >
                            {item.title}
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
                <HeaderText
                    iconColor="black"
                    size="normal"
                    textAlign="center"
                    mx="auto"
                    topMargin={32}
                >
                    Temukan kami dengan mudah
                </HeaderText>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                    p={10}
                    px={{ base: 4, md: 20 }}
                    mt={8}
                    maxW="1500px"
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
                                style={{ height: "100%", width: "100%", zIndex: 0 }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position} icon={icon}>
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
                        maxW="800px"
                        px={[4, 0]}
                        mt={4}
                        variants={fadeInRight}
                        transition={{ duration: 1 }}
                    >
                        <Text
                            color="black"
                            fontSize="md"
                            fontFamily="Poppins"
                            mb={6}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            Kemanapun kamu pergi, tidak perlu khawatir kehabisan baterai! Kamu
                            bisa temukan GoCas Station di tempat-tempat favorit mu. Kunjungi
                            GoCas Station terdekat dan mulai mengisi daya!
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
                                Telusuri semua lokasi
                            </Button>
                        </Link>
                    </MotionBox>
                </Flex>
            </MotionBox>
        </Box>
    );
};

export default Home3;
