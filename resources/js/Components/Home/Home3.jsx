import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Heading, Button } from "@chakra-ui/react";
import StepList from "./StepList";
import HeaderText from "../Text/HeaderText";
import FeatureCard from "./FeatureCard";
import { stepsBorrow, stepsReturn, features } from "./homeData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
        <Box p={6}>
            <HeaderText
                iconColor="black"
                size="normal"
                textAlign="center"
                mx="auto"
                topMargin={10}
            >
                Kenapa memilih GoCas?
            </HeaderText>
            <Flex
                wrap="wrap"
                justifyContent="space-around"
                align="center"
                p={5}
                gap={8}
            >
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 20, md: 6 }}
                justify="center"
                align="start"
                maxW="1500px"
                mx="auto"
                mt={20}
                mb={28}
            >
                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="black"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara meminjam
                    </HeaderText>
                    <Box
                        bg="rgba(239, 200, 43, 0.85)"
                        p={10}
                        pt={10}
                        pb={16}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                        opacity="80%"
                    >
                        <StepList steps={stepsBorrow} />
                    </Box>
                </Box>

                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="black"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara pengembalian
                    </HeaderText>
                    <Box
                        bg="rgba(236, 229, 187, 0.85)"
                        p={10}
                        pt={10}
                        pb={16}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                    >
                        <StepList steps={stepsReturn} />
                    </Box>
                </Box>
            </Flex>
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
                <Box
                    width={{ base: "100%", md: "40%" }}
                    height="300px"
                    borderRadius="xl"
                    overflow="hidden"
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
                </Box>
                <Box
                    width={{ base: "100%", md: "60%" }}
                    textAlign="start"
                    maxW="800px"
                    px={[4, 0]}
                    mt={4}
                >
                    <Text
                        color="black"
                        fontSize="md"
                        fontFamily="Poppins"
                        mb={6}
                    >
                        Kemanapun kamu pergi, tidak perlu khawatir kehabisan
                        baterai! Kamu bisa temukan GoCas Station di
                        tempat-tempat favorit mu. Kunjungi GoCas Station
                        terdekat dan mulai mengisi daya!
                    </Text>
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
                </Box>
            </Flex>
        </Box>
    );
};

export default Home3;
