import React from 'react';
import {Box, Grid, Text, Link, Icon, VStack, Flex, Center, Image} from '@chakra-ui/react';
import { MapPin } from "lucide-react";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const LocationCard = ({ title, address, detailLink, distance }) => (
  <Box
    border="1px"
    borderColor="gray.200"
    borderRadius="md"
    p={4}
    backgroundColor="white"
    boxShadow="md"
    _hover={{ boxShadow: 'xl' }}
    w="100%"
  >
    <Flex>
      <Center w="20%" pr={4}>
        <Icon as={MapPin} fill={"green"} color={"white"} boxSize={10} />
      </Center>
      <VStack align="start" spacing={2} w="80%">
        <HeaderText
          size="small"
          withIcon={false}
          iconColor="green"
        >
          {title}
        </HeaderText>
        <Text>{address}</Text>
        { distance !== 0
          ? <Text>{distance} km</Text>
          : <Text></Text>
        }
        <Link color="green.600" href={detailLink} fontWeight="bold">
          Lihat Detail
        </Link>
      </VStack>
    </Flex>
  </Box>
);

const LocationsGrid = ({ locations }) => {
  return (
    <Box w="100%">
      {locations &&
        <Grid w="100%" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              title={location.name}
              address={location.address_detail}
              detailLink={location.detailLink}
              distance={location.distance ?? 0}
            />
          ))}
        </Grid>
      }
      { locations.length === 0 &&
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
          backgroundColor="white"
          boxShadow="md"
          _hover={{ boxShadow: 'xl' }}
          w="100%"
        >
          <Center w="100%" pr={4}>
            <VStack>
              <Image
                src={'images/location/location-not-found.png'}
                width={50}
                height={50}
                mr={2}
              />
              <HeaderText
                size="tiny"
                withIcon={false}
                iconColor="red"
              >
                Lokasi Tidak Ditemukan :(
              </HeaderText>
              <b>
                <Text>Coba cari di tempat lainnya ya...</Text>
              </b>
            </VStack>
        </Center>
        </Box>
      }
    </Box>
  );
};

export default LocationsGrid;
