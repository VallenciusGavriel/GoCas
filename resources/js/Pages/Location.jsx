import Footer from "@/Components/Footer/Footer";
import LocationsGrid from "@/Components/Location/LocationsGrid.jsx";
import Maps from "@/Components/Location/Maps.jsx";
import Navbar from "@/Components/Navbar/Navbar";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import {
    Box,
    Button,
    Center,
    Flex,
    IconButton,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { locationTranslations } from "../Translates/locationTranslation";

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

const Location = ({
    locations: initialLocations,
    center,
    show_count,
    total_count,
    station_count,
}) => {
    const [query, setQuery] = useState("");
    const [lat, setLat] = useState(center[0]);
    const [long, setLong] = useState(center[1]);
    const [error, setError] = useState(null);
    const [ver, setVer] = useState(0);
    const [showCount, setShowCount] = useState(show_count);
    const [locations, setLocations] = useState(initialLocations);

    // Get current language from context
    const { language, setLanguage } = useLanguage();
    const t = locationTranslations[language]; // Get translations based on current language

    useEffect(() => {
        getFELocation();
    }, []);

    const getFELocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                hitSearchLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );
                setVer(ver + 1);
            },
            (err) => {
                setError(err.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    };

    const searchLocation = async () => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    query
                )}&format=json&limit=1&countrycodes=ID`
            );
            const data = await response.json();

            if (data.length > 0) {
                setLat(data[0].lat);
                setLong(data[0].lon);
                setError(null);
            } else {
                setError(t.searchNotFound);
                setLat(null);
                setLong(null);
                return;
            }

            await hitSearchLocation(data[0].lat, data[0].lon);
        } catch (err) {
            setError(t.searchError);
            setLat(null);
            setLong(null);
        }
    };

    const hitSearchLocation = async (
        lat = null,
        lon = null,
        northBorder = null,
        eastBorder = null,
        southBorder = null,
        westBorder = null
    ) => {
        let url = `/location-search?lat=${lat}&long=${lon}`;

        if (northBorder && eastBorder && southBorder && westBorder) {
            url += `&north=${northBorder}&east=${eastBorder}&south=${southBorder}&west=${westBorder}`;
        }

        const locationResponse = await fetch(url);
        const dataLocation = await locationResponse.json();

        setLocations(dataLocation);
        setLat(lat);
        setLong(lon);
        setShowCount(dataLocation.length);
    };

    return (
        <>
            <Head title={t.title} />
            <Navbar />
            <MotionVStack
                pt={"96px"}
                pb={5}
                w={"100%"}
                alignItems={{base: "center", xl: "start"}}
                position={"relative"}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1 }}
            >
                <HeaderText
                    px={{ base: 10, md: 20 }}
                    topMargin={20}
                    size="normal"
                    iconColor="black"
                    inputclass={"xl:!text-5xl md:!text-3xl !text-2xl"}
                    textAlign={{base: "center", xl: "start"}}
                >
                    {t.header}
                </HeaderText>

                <Flex
                    mx={"auto"}
                    flexDir={{base: "column", sm: "row"}}
                >
                    <MotionFlex
                        align="center"
                        maxW="md"
                        borderWidth="1px"
                        borderRadius="lg"
                        px={2}
                        py={1}
                        w="100%"
                        mt={4}
                        backgroundColor={"white"}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                        transition={{ duration: 1 }}
                    >
                        <Input
                            placeholder={t.searchPlaceholder}
                            value={query}
                            w="100%"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <IconButton
                            aria-label={t.searchPlaceholder}
                            icon={<SearchIcon />}
                            onClick={searchLocation}
                            colorScheme="yellow"
                            borderRadius="md"
                            ml={2}
                        />
                    </MotionFlex>
                    <MotionFlex
                        align="center"
                        justify={"center"}
                        px={2}
                        py={1}
                        mt={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                        transition={{ duration: 1 }}
                    >
                        <Button m={"auto"} onClick={getFELocation}>
                            {t.reCenter}
                        </Button>
                    </MotionFlex>
                </Flex>

                <MotionFlex
                    align="center"
                    borderWidth="1px"
                    borderRadius="lg"
                    px={2}
                    py={1}
                    w={{ base: "90%", md: "80%" }}
                    mx={"auto"}
                    mt={4}
                    backgroundColor={"white"}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                    transition={{ duration: 1 }}
                >
                    <Maps
                        key={`${ver}`}
                        locations={locations}
                        point={[lat, long]}
                        searchLocation={hitSearchLocation}
                    />
                </MotionFlex>
            </MotionVStack>

            <Center>
                <MotionBox
                    p={5}
                    w={{ base: "100%", md: "80%" }}
                    minH={"100vh"}
                    position={"relative"}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 1 }}
                >
                    <VStack align="start" px={2} py={1} w="100%" mt={4}>
                        <HeaderText
                            px={0}
                            size="normal"
                            topMargin={8}
                            iconColor="black"
                            inputclass={"xl:!text-3xl md:!text-2xl !text-xl"}
                        >
                            {t.nearbyLocations}
                        </HeaderText>
                        <Box
                            borderTop={"1px"}
                            w={"100%"}
                            borderColor={"#cccccc"}
                        />
                        <Flex gap={8}>
                            <Text>
                                {t.locationsShown}: {showCount}
                            </Text>
                            <Text>
                                {t.totalLocations}: {total_count}
                            </Text>
                            <Text>
                                {t.totalStations}: {station_count}
                            </Text>
                        </Flex>
                    </VStack>

                    <Flex align="center" px={2} py={1} w="100%" mt={4}>
                        <LocationsGrid
                            locations={locations}
                            startLat={lat}
                            startLong={long}
                        />
                    </Flex>
                </MotionBox>
            </Center>
            <Footer />
        </>
    );
};

export default Location;
