  import React from "react";
  import {Center, Flex, Box, IconButton, Input} from "@chakra-ui/react";
  import Footer from "@/Components/Footer/Footer";
  import Navbar from "@/Components/Navbar/Navbar";
  import { Head } from "@inertiajs/react";
  import HeaderText from "@/Components/Text/HeaderText.jsx";
  import {SearchIcon} from "lucide-react";
  import Maps from "@/Components/Location/Maps.jsx";
  import LocationsGrid from "@/Components/Location/LocationsGrid.jsx";

  const Location = ({ locations }) => {
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
                <Input placeholder="Cari Lokasi" w="100%"/>
                <IconButton
                  aria-label="Search location"
                  icon={<SearchIcon />}
                  colorScheme="green"
                  borderRadius="md"
                  ml={2}
                />
              </Flex>

              <Flex align="center" borderWidth="1px" borderRadius="lg" px={2} py={1} w="100%" mt={4}>
                <Maps locations={locations}/>
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
