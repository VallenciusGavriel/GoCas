import React, {useEffect, useState} from 'react';
import {Center, Flex, Box, IconButton, Input, VStack, Text} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import { SearchIcon } from "lucide-react";
import Maps from "@/Components/Location/Maps.jsx";
import LocationsGrid from "@/Components/Location/LocationsGrid.jsx";

const Location = ({ locations: initialLocations, center, show_count, total_count, station_count }) => {
  const [query, setQuery] = useState('');
  const [lat, setLat] = useState(center[0]);
  const [long, setLong] = useState(center[1]);
  const [error, setError] = useState(null);
  const [ver, setVer] = useState(0);
  const [showCount, setShowCount] = useState(show_count);
  const [locations, setLocations] = useState(initialLocations);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                hitSearchLocation(position.coords.latitude, position.coords.longitude);
                setVer(1);
            },
            (err) => {
                setError(err.message);
            },
            {
                enableHighAccuracy: true, // Ensures accurate location (may take longer)
                timeout: 10000, // Timeout after 10 seconds
                maximumAge: 0, // Don't use cached location
            }
        );
    }, []);

    const searchLocation = async (lat = null, lon = null) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=ID`
      );
      const data = await response.json();

      if (data.length > 0) {
        setLat(data[0].lat);
        setLong(data[0].lon);
        setError(null);
      } else {
        setError('Location not found.');
        setLat(null);
        setLong(null);
        return;
      }

      await hitSearchLocation(data[0].lat, data[0].lon);
    } catch (err) {
      setError('An error occurred while searching for the location.');
      setLat(null);
      setLong(null);
    }
  };

  const hitSearchLocation = async (lat = null, lon = null, northBorder = null, eastBorder = null, southBorder = null, westBorder = null) => {
    let url = `/location-search?lat=${lat}&long=${lon}`;

    if (northBorder && eastBorder && southBorder && westBorder) {
      url += `&north=${northBorder}&east=${eastBorder}&south=${southBorder}&west=${westBorder}`
    }

    const locationResponse = await fetch(url);
    const dataLocation = await locationResponse.json();

    setLocations(dataLocation);
    setLat(lat);
    setLong(lon);
    setShowCount(dataLocation.length)
  };
  return (
    <>
      <Head title="Location" />
      <Navbar />
        <VStack
          pt={"96px"}
          pb={5}
          w={"100%"}
          hmin={"100vh"}
          alignItems={"start"}
          position={"relative"}
        >
          <HeaderText px={{base: 10, md: 20}} topMargin={20} size="normal" iconColor="black" inputclass={"xl:!text-5xl md:!text-3xl !text-2xl"}>
            Lokasi GoCas
          </HeaderText>

          <Center mx={"auto"}>
            <Flex align="center" maxW="md" borderWidth="1px" borderRadius="lg" px={2} py={1} w="100%" mt={4} backgroundColor={'white'}>
              <Input
                placeholder="Cari Lokasi"
                value={query}
                w="100%"
                onChange={(e) => setQuery(e.target.value)}
              />
              <IconButton
                aria-label="Search location"
                icon={<SearchIcon />}
                onClick={() => searchLocation()}
                colorScheme="yellow"
                borderRadius="md"
                ml={2}
              />
            </Flex>
          </Center>

          <Flex align="center" borderWidth="1px" borderRadius="lg" px={2} py={1} w={{ base: "90%", md: "80%"}} mx={"auto"} mt={4} backgroundColor={'white'}>
            <Maps
                key={`${ver}`}
                locations={locations}
                point={[lat, long]}
                searchLocation={hitSearchLocation}
            />
          </Flex>
        </VStack>
        <Center>
            <Box
                p={5}
                w={{ base: "100%", md: "80%" }}
                hmin={"100vh"}
                position={"relative"}
            >
                <VStack align="start" px={2} py={1} w="100%" mt={4}>
                    <HeaderText px={0} size="normal" topMargin={8} iconColor="black" inputclass={"xl:!text-3xl md:!text-2xl !text-xl"}>
                        Lokasi Terdekat
                    </HeaderText>
                    <Box borderTop={"1px"} w={"100%"} borderColor={"#cccccc"}/>
                    <Flex gap={8}>
                        <Text>Lokasi Ditunjukkan: {showCount}</Text>
                        <Text>Total Lokasi: {total_count}</Text>
                        <Text>Total Stasiun: {station_count}</Text>
                    </Flex>
                </VStack>

                <Flex align="center" px={2} py={1} w="100%" mt={4}>
                    <LocationsGrid locations={locations} startLat={lat} startLong={long} />
                </Flex>
            </Box>
        </Center>
      <Footer />
    </>
  );
};

export default Location;
