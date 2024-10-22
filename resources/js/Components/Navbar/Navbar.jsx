import React, { useState } from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    Button as ChakraButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Collapse,
    useDisclosure,
    useBreakpointValue,
    Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import GocasLogo from "../../../../public/images/navbar/gocas-logo.png"; // Ensure correct path

// Import images
import IDFlag from "../../../../public/images/navbar/IDFlag.png";
import ENFlag from "../../../../public/images/navbar/ENFlag.png";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", xl: "flex" });

    const isActive = (route) => window.location.pathname === route;

    const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // Update these links to reflect your application's pages
    const menuLinks = [
        { name: "Lokasi", href: "/location" },
        { name: "Produk", href: "/products" },
        { name: "Pengguna", href: "/users" },
        { name: "Partner", href: "/partners" },
        { name: "Tentang Kami", href: "/about" },
    ];

    // Update these buttons if needed
    const buttons = [
        { label: "Masuk", variant: "solid", id: "signInButton" },
        { label: "Daftar", variant: "outline", id: "registerButton" },
    ];

    return (
        <MotionBox
            p={2}
            bg="white"
            shadow="md"
            borderBottom="1px"
            borderColor="gray.200"
            position="fixed"
            top={0}
            left={0}
            right={0}
            width="100%"
            zIndex="20"
            borderRadius="xl"
        >
            <Flex
                align="center"
                justify="space-between"
                maxW="1200px"
                mx="auto"
            >
                {/* Logo Section */}
                <Flex align="center" justify="flex-start">
                    <Link key={'home'} href={'/'}>
                        <Image
                            src={GocasLogo}
                            alt="GoCas Logo"
                            boxSize="80px"
                            mr={4}
                            objectFit="contain"
                        />
                    </Link>

                    {/* Language Dropdown */}
                    <Box
                        ml={10}
                        borderWidth="1px"
                        borderRadius="md"
                        px={2}
                        display="flex"
                        alignItems="center"
                        borderColor="black"
                    >
                        <Flex align="center">
                            <Image
                                src={
                                    selectedLanguage === "ID" ? IDFlag : ENFlag
                                }
                                alt={
                                    selectedLanguage === "ID"
                                        ? "Indonesian Flag"
                                        : "English Flag"
                                }
                                boxSize="16px"
                                mr={2}
                            />
                            <Text fontWeight="bold">{selectedLanguage}</Text>
                        </Flex>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<ChevronDownIcon />}
                                ml={2}
                                aria-label="Select Language"
                                bg="transparent"
                                _hover={{ bg: "transparent" }}
                                _active={{ bg: "transparent" }}
                            />
                            <MenuList>
                                <MenuItem
                                    onClick={() => handleLanguageChange("ID")}
                                >
                                    <Image
                                        src={IDFlag}
                                        alt="Indonesian Flag"
                                        boxSize="20px"
                                        mr={2}
                                    />
                                    <Text>Bahasa Indonesia (ID)</Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleLanguageChange("EN")}
                                >
                                    <Image
                                        src={ENFlag}
                                        alt="English Flag"
                                        boxSize="20px"
                                        mr={2}
                                    />
                                    <Text>English (EN)</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>

                {/* Hamburger Icon for Mobile */}
                <IconButton
                    display={{ base: "flex", xl: "none" }}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={onToggle}
                    aria-label="Toggle Navigation"
                />

                {/* Desktop Menu */}
                <Flex align="center" ml={10} spacing={8} display={display}>
                    {menuLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <MotionText
                                fontFamily="poppins"
                                mx={4}
                                cursor="pointer"
                                fontWeight={
                                    isActive(link.href) ? "bold" : "normal"
                                }
                                color="black"
                                transition={{ duration: 0.3 }}
                            >
                                {link.name}
                            </MotionText>
                        </Link>
                    ))}
                </Flex>

                {/* Button Section */}
                <Flex display={display}>
                    {buttons.map((button) => (
                        <ChakraButton
                            key={button.id}
                            variant={button.variant}
                            mr={4}
                            borderRadius="xl"
                        >
                            {button.label}
                        </ChakraButton>
                    ))}
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            <Collapse in={isOpen}>
                <Box
                    display={{ base: "block", lg: "none" }}
                    p={4}
                    bg="white"
                    borderBottom="1px"
                    borderColor="gray.200"
                >
                    <Flex direction="column" align="center">
                        {menuLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <Text
                                    my={2}
                                    fontFamily="poppins"
                                    cursor="pointer"
                                >
                                    {link.name}
                                </Text>
                            </Link>
                        ))}
                        <Flex direction="column" mt={4}>
                            {buttons.map((button) => (
                                <ChakraButton
                                    key={button.id}
                                    variant={button.variant}
                                    mb={2}
                                    borderRadius="xl"
                                >
                                    {button.label}
                                </ChakraButton>
                            ))}
                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </MotionBox>
    );
};

export default Navbar;
