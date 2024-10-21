import React, { useState } from 'react';
import { Center, Flex, Box, IconButton, Input } from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import { SearchIcon } from "lucide-react";
import Maps from "@/Components/Location/Maps.jsx";
import LocationsGrid from "@/Components/Location/LocationsGrid.jsx";

const Location = ({ locations: initialLocations, center }) => {
  const [query, setQuery] = useState('');
  const [lat, setLat] = useState(center[0]);
  const [long, setLong] = useState(center[1]);
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState(initialLocations);

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
  };
  return (
    <>
      <Head title="Location" />
      <Navbar />
      <Flex
        bgImage={`url('/images/home/background-1.png')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="top left" // Position image at top left
        borderRadius="0"
        position="absolute"
        zIndex={0}
        h={'50vh'}
        w={'full'}
      >

      </Flex>
      <Center
        mt="96px"
        w="full"
        bgGradient='linear(to-b, white 50%, green.300)'
      >
        <Box
          p={5}
          w={{ base: "100%", md: "80%" }}
          hmin={"100vh"}
          position={"relative"}
        >
          <HeaderText size="normal" withIcon={true} iconColor="green">
            Lokasi GoCas
          </HeaderText>

          <Center>
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
                colorScheme="green"
                borderRadius="md"
                ml={2}
              />
            </Flex>
          </Center>

          <Flex align="center" borderWidth="1px" borderRadius="lg" px={2} py={1} w="100%" mt={4} backgroundColor={'white'}>
            <Maps locations={locations} point={[lat, long]} searchLocation={hitSearchLocation}/>
          </Flex>
        </Box>
      </Center>
      <Center
        w="full"
        bgGradient='linear(to-b, green.300, green.400 40%)'
      >
        <Box
          p={5}
          w={{ base: "100%", md: "80%" }}
          hmin={"100vh"}
          position={"relative"}
        >

          <Flex align="center" px={2} py={1} w="100%" mt={4}>
            <HeaderText size="normal" withIcon={true} iconColor="white">
              Lokasi Terdekat
            </HeaderText>
          </Flex>

          <Flex align="center" px={2} py={1} w="100%" mt={4}>
            <LocationsGrid locations={locations} />
          </Flex>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default Location;
