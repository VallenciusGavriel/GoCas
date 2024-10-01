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
                            {/* Facebook */}
                            <Link href="#" isExternal aria-label="Facebook">
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
                                    <Icon
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        w="7"
                                        h="7"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </Icon>
                                </Box>
                            </Link>
                            {/* Twitter */}
                            <Link href="#" isExternal aria-label="Twitter">
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
                                    <Icon
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        w="7"
                                        h="7"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </Icon>
                                </Box>
                            </Link>
                            {/* Instagram */}
                            <Link href="#" isExternal aria-label="Instagram">
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
                                    <Icon
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        w="7"
                                        h="7"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="20"
                                            height="20"
                                            rx="5"
                                            ry="5"
                                        />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                        <line
                                            x1="17.5"
                                            y1="6.5"
                                            x2="17.51"
                                            y2="6.5"
                                        />
                                    </Icon>
                                </Box>
                            </Link>
                            {/* LinkedIn */}
                            <Link href="#" isExternal aria-label="LinkedIn">
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
                                    <Icon
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        w="7"
                                        h="7"
                                    >
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </Icon>
                                </Box>
                            </Link>
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
            {/* Jika Anda ingin mengaktifkannya kembali, hapus komentar di bawah */}
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
