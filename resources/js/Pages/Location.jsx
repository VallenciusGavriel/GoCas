import React, { useState } from 'react';
import {Center, Flex, Box, IconButton, Input} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import {SearchIcon} from "lucide-react";
import Maps from "@/Components/Location/Maps.jsx";
import LocationsGrid from "@/Components/Location/LocationsGrid.jsx";

const Location = ({ locations }) => {
  const [query, setQuery] = useState('');
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);

  const searchLocation = async () => {
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
      }
    } catch (err) {
      setError('An error occurred while searching for the location.');
      setLat(null);
      setLong(null);
    }
  };

  return (
    <>
      <Head title="Location" />
      <Navbar />
      <Center>
        <Box
          p={5}
          w={{ base: "100%", md: "80%" }}
          hmin={"100vh"}
          position={"relative"}
        >
          <HeaderText
            size="normal"
            withIcon={true}
            iconColor="green"
          >
            Lokasi GoCas
          </HeaderText>

          <Flex align="center" maxW="md" borderWidth="1px" borderRadius="lg" px={2} py={1} w="100%" mt={4}>
            <Input placeholder="Cari Lokasi"
                   value={query}
                   w="100%"
                   onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton
              aria-label="Search location"
              icon={<SearchIcon />}
              onClick={searchLocation}
              colorScheme="green"
              borderRadius="md"
              ml={2}
            />
          </Flex>

          <Flex align="center" borderWidth="1px" borderRadius="lg" px={2} py={1} w="100%" mt={4}>
            <Maps locations={locations} point={[lat, long]}/>
          </Flex>

          <Flex align="center" px={2} py={1} w="100%" mt={4}>
            <HeaderText
              size="normal"
              withIcon={true}
              iconColor="green"
            >
              Lokasi Terdekat
            </HeaderText>
          </Flex>

          <Flex align="center" px={2} py={1} w="100%" mt={4}>
            <LocationsGrid locations={locations}/>
          </Flex>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default Location;
