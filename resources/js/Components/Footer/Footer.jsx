import React from "react";
import {
    Box,
    Flex,
    Button,
    Text,
    Link,
    Icon,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { socialLinks } from "./socialLinks";

const Footer = () => {
    return (
        <Box
            bg="#1c3d4e"
            color="white"
            py={{ base: "10", md: "16" }}
            position="relative"
        >
            <Box maxW="container.xl" px="6" mx="auto">
                {/* Top section with Send Message button */}
                <Flex
                    justify={{ base: "center", md: "end" }}
                    mb={{ base: "10", md: "20" }}
                >
                    <Button
                        bg="#26B99A"
                        color="white"
                        px={{ base: "6", md: "8" }}
                        py={{ base: "3", md: "4" }}
                        fontSize={{ base: "md", md: "lg" }}
                        rounded="full"
                        _hover={{ bg: "#2ecbaa" }}
                        size="lg"
                    >
                        Send Message
                    </Button>
                </Flex>

                {/* Main footer content */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    wrap="wrap"
                    justify="space-between"
                    gap={{ base: "8", md: "16" }}
                    mb={{ base: "8", md: "12" }}
                >
                    {/* Address Section */}
                    <VStack align="start" flex="1">
                        <Flex align="center" gap="2" fontSize="xl" mb="4">
                            <Icon as={MapPin} w="7" h="7" color="#26B99A" />
                            <Text fontWeight="bold" fontSize="xl">
                                Address
                            </Text>
                        </Flex>
                        <Text color="gray.300" lineHeight="tall" fontSize="lg">
                            PT Makmur Tech Indonesia
                            <br />
                            Rukan Sedayu Square Blok N No 06,
                            <br />
                            Cengkareng, Jakarta Barat
                        </Text>
                    </VStack>

                    {/* Contact Section */}
                    <VStack align="start" flex="1">
                        <Flex align="center" gap="2" fontSize="xl" mb="4">
                            <Icon as={Phone} w="7" h="7" color="#26B99A" />
                            <Text fontWeight="bold" fontSize="xl">
                                Contact
                            </Text>
                        </Flex>
                        <Text color="gray.300" lineHeight="tall" fontSize="lg">
                            <Text as="span" fontWeight="bold">
                                Phone:
                            </Text>{" "}
                            +62 82188886665
                            <br />
                            <Text as="span" fontWeight="bold">
                                Email:
                            </Text>{" "}
                            support@gocas.id
                        </Text>
                    </VStack>

                    {/* Follow Us Section */}
                    <VStack align="start" flex="1">
                        <Text fontSize="xl" mb="4" fontWeight="bold">
                            Follow Us
                        </Text>
                        <HStack spacing="6">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    isExternal
                                    aria-label={social.label}
                                >
                                    <Box
                                        w="14"
                                        h="14"
                                        rounded="full"
                                        border="1px"
                                        borderColor="gray.400"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        _hover={{
                                            borderColor: "#26B99A",
                                            color: "#26B99A",
                                        }}
                                        transition="all 0.3s"
                                    >
                                        {social.icon}
                                    </Box>
                                </Link>
                            ))}
                        </HStack>
                    </VStack>
                </Flex>

                {/* Divider line */}
                <Box
                    borderTop="1px"
                    borderColor="gray.600"
                    my={{ base: "8", md: "12" }}
                />

                {/* Copyright section */}
                <Text textAlign="center" color="gray.300" fontSize="lg">
                    © Copyright{" "}
                    <Text as="span" color="#26B99A" fontWeight="medium">
                        GoCas
                    </Text>{" "}
                    All Rights Reserved
                </Text>
            </Box>

            {/* Scroll to top button */}
            {/* <Button
                position="fixed"
                bottom="4"
                right="4"
                bg="#26B99A"
                rounded="full"
                p="2"
                _hover={{ bg: "#2ecbaa" }}
                zIndex="1000"
                aria-label="Scroll to top"
            >
                <Icon as={ArrowUp} w="5" h="5" />
            </Button> */}
        </Box>
    );
};

export default Footer;
