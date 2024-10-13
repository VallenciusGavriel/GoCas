import React from 'react';
import {Box, Grid, Text, Heading, Link, Icon, VStack, Flex, Center} from '@chakra-ui/react';
import {MapPin} from "lucide-react";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const LocationCard = ({ title, address, detailLink }) => (
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
      <Center
        w="20%"
        pr={4}
      >
        <MapPin fill={"green"} color={"white"} size={65} strokeWidth={2}/>
      </Center>
      <VStack align="start" spacing={2}>
        <HeaderText
          size="small"
          withIcon={false}
          iconColor="green"
        >
          {title}
        </HeaderText>
        <Text>{address}</Text>
        <Link color="green.600" href={detailLink} fontWeight="bold">
          Lihat Detail
        </Link>
      </VStack>
    </Flex>
  </Box>
);

const LocationsGrid = ({locations}) => {
  return (
    <Box w="100%">
      {/* Grid of location cards */}
      <Grid w="100%" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        {locations.map((location, index) => (
          <LocationCard
            key={location.id}
            title={location.name}
            address={location.address_detail}
            detailLink={location.detailLink} // Assuming each location has a detail link
          />
        ))}
      </Grid>
    </Box>
  );
};

export default LocationsGrid;
