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

const LocationCard = ({ title, address, operational_hours, apple, type_c, type_b, status, distance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex mt={4} gap={8} w={"100%"} justifyContent={"space-between"}>
              <Center w="20%" pl={2}>
                <Icon as={MapPin} fill={"green"} color={"white"} boxSize={24} />
              </Center>
              <VStack alignItems={"left"}>
                <HeaderText size={"normal"} withIcon={false} iconColor={"green"}>{title}</HeaderText>
                <Text>{address}</Text>
              </VStack>
            </Flex>
            <Flex mt={8} gap={8} w={"100%"} justifyContent={"space-around"}>
              <VStack alignItems={"left"}>
                <Text>Status</Text>
                <Flex color={"green"} gap={1} justifyContent={"center"} alignItems={"center"}>
                  <Image src='/images/location/status.png' w={"21px"} h={"21px"} alt='Status' />
                  <Text><b>{status}</b></Text>
                </Flex>
              </VStack>
              <VStack alignItems={"left"}>
                <Text>Jarak Dari Kamu</Text>
                <Flex gap={1} justifyContent={"left"} alignItems={"center"}>
                  <Image src='/images/location/distance.png' w={"21px"} h={"21px"} alt='Distance' />
                  <Text><b>{distance} KM</b></Text>
                </Flex>
              </VStack>
              <VStack alignItems={"left"}>
                <Text>Jam Operasional</Text>
                <Flex gap={1} justifyContent={"left"} alignItems={"center"}>
                  <Image src='/images/location/clock.png' w={"21px"} h={"21px"} alt='Clock' />
                  <Text><b>{operational_hours}</b></Text>
                </Flex>
              </VStack>
            </Flex>
            <Flex mt={4} gap={2}>
              <Box
                border="2px"
                borderColor="green.200"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"green"}>Apple</Text>
                  <HeaderText size={"large"} withIcon={false} iconColor={"black"}>{apple}</HeaderText>
                </VStack>
              </Box>
              <Box
                border="2px"
                borderColor="green.200"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"green"}>Type C</Text>
                  <HeaderText size={"large"} withIcon={false} iconColor={"black"}>{type_c}</HeaderText>
                </VStack>
              </Box>
              <Box
                border="2px"
                borderColor="green.200"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"green"}>Type B</Text>
                  <HeaderText size={"large"} withIcon={false} iconColor={"black"}>{type_b}</HeaderText>
                </VStack>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            <Link color="green.600" onClick={onOpen} fontWeight="bold">
              Lihat Detail
            </Link>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

const LocationsGrid = ({ locations }) => {
  const isLocationEnabled = import.meta.env.VITE_ENABLE_LOCATION ? import.meta.env.VITE_ENABLE_LOCATION === 'true' : true;
console.log(locations);
  return (
    <>
      <Box w="100%">
        {(isLocationEnabled && (locations &&
          <Grid w="100%" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
            {locations.map((location, index) => (
              <LocationCard
                key={location.id}
                title={location.name}
                address={location.address_detail}
                operational_hours={location.operational_hours}
                apple={location.apple}
                type_c={location.type_c}
                type_b={location.type_b}
                status={location.status}
                distance={location.distance ?? 0}
              />
            ))}
          </Grid>)
        || (locations.length === 0 &&
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
          ))
          || (!isLocationEnabled &&
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
                <Center w="100%" my={40} pr={4}>
                <HeaderText
                  size="large"
                  withIcon={false}
                  iconColor="green"
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
