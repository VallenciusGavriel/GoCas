import React, {useState} from 'react';
import {
  Box,
  Grid,
  Text,
  Link,
  Icon,
  VStack,
  Flex,
  Center,
  Image,
  Modal,
  ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure
} from '@chakra-ui/react';
import { MapPin } from "lucide-react";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import pin from "@/../../public/images/location/pin.png";

const LocationCard = ({ title, address, operational_hours, apple, lat, long, startLat, startLong, status, distance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <Flex mt={4} gap={8} w={"100%"} justifyContent={"start"}>
              <VStack alignItems={"left"}>
                <HeaderText px={0} topMargin={"12"} size={"normal"} withIcon={false} iconColor={"black"}>{title}</HeaderText>
              </VStack>
            </Flex>
            <Flex mt={8} gap={8} w={"100%"} justifyContent={"start"}>
              <VStack alignItems={"left"}>
                  <Text color={"#7af555"}><b>Status</b></Text>
                <Flex color={"green"} gap={1} justifyContent={"center"} alignItems={"center"}>
                  <Image src='/images/location/status.png' w={"21px"} h={"21px"} alt='Status' />
                  <Text><b>{status}</b></Text>
                </Flex>
              </VStack>
                <VStack alignItems={"left"}>
                    <Text color={"#7af555"}><b>Jam Operasional</b></Text>
                    <Text><b>{operational_hours}</b></Text>
                </VStack>
            </Flex>
              <VStack alignItems={"left"} gap={0} mt={4}>
                <Text color={"#7af555"}><b>Alamat</b></Text>
                <Text>{address}</Text>
              </VStack>
              <Flex justifyContent={"end"} mt={2} mb={8}>
                  <a href={"https://www.google.com/maps/dir/"+startLat+","+startLong+"/"+lat+","+long}>
                      <Button
                          colorScheme="green"
                          bg="#7cf656"
                          color="white"
                          size="lg"
                          fontWeight="bold"
                          borderRadius="full"
                      >
                          Petunjuk Arah
                      </Button>
                  </a>
              </Flex>

            <Flex mt={4} gap={2} borderTop={"1px"} borderBottom={"1px"} borderColor={"#cccccc"} justifyContent={"space-around"} textAlign={"center"}>
              <VStack alignItems={"left"}>
                  <Text fontSize={"large"} color={"black"}><b>Tersedia</b></Text>
                  <Text px={0} topMargin={8} className={"xl:!text-4xl md:!text-3xl !text-lg"} withIcon={false} iconColor={"black"}>{apple}/12</Text>
                </VStack>
              <VStack alignItems={"left"} borderLeft={"1px"} borderColor={"#cccccc"}/>
              <VStack alignItems={"left"}>
                  <Text fontSize={"large"} color={"black"}><b>Jenis Kabel</b></Text>
                  <Text px={0} topMargin={8} size={"small"} withIcon={false} iconColor={"black"} className={"text-center"}>Type C, Lightning, Android</Text>
                </VStack>
              <VStack alignItems={"left"} borderLeft={"1px"} borderColor={"#cccccc"}/>
              <VStack alignItems={"left"}>
                  <Text fontSize={"large"} color={"black"}><b>Jarak</b></Text>
                  <Text px={0} topMargin={8} className={"xl:!text-4xl md:!text-3xl !text-lg"} withIcon={false} iconColor={"black"}>{distance} km</Text>
                </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
        border="1px"
        borderColor="#7af555"
        borderRadius="md"
        px={8}
        py={4}
        backgroundColor="white"
        boxShadow="md"
        _hover={{ boxShadow: 'xl' }}
        w="100%"
      >
        <Flex h={"full"} gap={4}>
          <VStack alignItems="start" justifyContent={"center"} spacing={2} w="50%">
            <Image src={pin} alt={"ASD"} w={8}/>
              <HeaderText
                  topMargin={10}
                  size="small"
                  withIcon={false}
                  iconColor="black"
                  px={0}
              >
                  {title}
              </HeaderText>
              { distance !== 0
                  ? <Text>{distance} km</Text>
                  : <Text></Text>
              }
          </VStack>
          <VStack alignItems="start" justifyContent={"start"} mt={2} spacing={2} w="50%">
              <HeaderText
                  topMargin={8}
                  size="small"
                  withIcon={false}
                  iconColor="black"
                  px={0}
              >
                  Alamat
              </HeaderText>
            <Text>{address}</Text>
            <Link color="#7af555" onClick={onOpen} fontWeight="bold">
              Lihat Detail
            </Link>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

const LocationsGrid = ({ locations, startLat, startLong }) => {
  const isLocationEnabled = import.meta.env.VITE_ENABLE_LOCATION ? import.meta.env.VITE_ENABLE_LOCATION === 'true' : true;

  return (
    <>
      <Box w="100%">
        {(isLocationEnabled && (locations.length !== 0 &&
          <Grid w="100%" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            {locations.map((location, index) => (
              <LocationCard
                key={location.id}
                title={location.name}
                address={location.address_detail}
                operational_hours={location.operational_hours}
                apple={location.apple}
                lat={location.latitude}
                long={location.longitude}
                startLat={startLat}
                startLong={startLong}
                status={location.status}
                distance={location.distance ?? 0}
              />
            ))}
          </Grid>)
        || (locations.length === 0 &&
          <Box
            border="1px"
            borderColor="#7af555"
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
                  topMargin={8}
                  size="tiny"
                  withIcon={false}
                  iconColor="red"
                  px={0}
                >
                  Lokasi Tidak Ditemukan :(
                </HeaderText>
                <b>
                  <Text>Coba cari di tempat lainnya ya...</Text>
                </b>
              </VStack>
            </Center>
          </Box>
          ))
          || (!isLocationEnabled &&
            <Box
              border="1px"
              borderColor="#7af555"
              borderRadius="md"
              p={4}
              backgroundColor="white"
              boxShadow="md"
              _hover={{ boxShadow: 'xl' }}
              w="100%"
            >
                <Center w="100%" my={40} pr={4}>
                <HeaderText
                  topMargin={8}
                  size="large"
                  withIcon={false}
                  iconColor="yellow"
                  px={0}
                >
                  Coming Soon
                </HeaderText>
              </Center>
            </Box>
          )
        }
      </Box>
    </>
  );
};

export default LocationsGrid;
