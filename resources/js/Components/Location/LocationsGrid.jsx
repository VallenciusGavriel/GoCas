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

const LocationCard = ({ title, address, operational_hours, apple, type_c, type_b, status, distance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex mt={4} gap={8} w={"100%"} justifyContent={"start"}>
              <Center w="20%" pl={2}>
                <Icon as={MapPin} fill={"yellow.600"} color={"white"} boxSize={24} />
              </Center>
              <VStack alignItems={"left"}>
                <HeaderText px={0} topMargin={"12"} size={"normal"} withIcon={false} iconColor={"yellow"}>{title}</HeaderText>
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
                borderColor="yellow.500"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"yellow.500"}>Apple</Text>
                  <HeaderText px={0} topMargin={2} size={"large"} withIcon={false} iconColor={"black"}>{apple}</HeaderText>
                </VStack>
              </Box>
              <Box
                border="2px"
                borderColor="yellow.500"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"yellow.500"}>Type C</Text>
                  <HeaderText px={0} topMargin={2} size={"large"} withIcon={false} iconColor={"black"}>{type_c}</HeaderText>
                </VStack>
              </Box>
              <Box
                border="2px"
                borderColor="yellow.500"
                p={4}
                backgroundColor="white"
                w="100%"
              >
              <VStack alignItems={"left"}>
                  <Text fontSize={"3xl"} color={"yellow.500"}>Type B</Text>
                  <HeaderText px={0} topMargin={2} size={"large"} withIcon={false} iconColor={"black"}>{type_b}</HeaderText>
                </VStack>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='yellow' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
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

const LocationsGrid = ({ locations }) => {
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
