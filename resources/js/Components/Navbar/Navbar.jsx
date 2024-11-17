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
import GocasWhite from "../../../../public/images/navbar/logo-white.png"; // Ensure correct path

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
        { name: "Tentang Kami", href: "/about" },
        { name: "Lokasi", href: "/location" },
        { name: "Produk", href: "/products" },
        { name: "Partnership", href: "/partnership" },
    ];

    // Update these buttons if needed
    const buttons = [
        { label: "Help Center", variant: "solid", id: "helpButton", href: "https://wa.me/6282188886665" },
        // { label: "Daftar", variant: "solid", id: "registerButton" },
    ];

    return (
        <MotionBox
            p={2}
            bg="#653719"
            color={"white"}
            position="fixed"
            top={0}
            left={0}
            right={0}
            width="100%"
            px={"20px"}
            pb={{base: "24px", md: "16px"}}
            roundedBottom={"xl"}
            zIndex="20"
        >
            <Flex
                align="center"
                justify="space-between"
                maxW="1200px"
                mx="auto"
            >
                {/* Logo Section */}
                <Flex align="center" justify="flex-start">
                    <Link href={"/"}>
                        <Image
                            src={GocasLogo}
                            alt="GoCas Logo"
                            boxSize="80px"
                            mr={4}
                            objectFit="contain"
                        />
                    </Link>
                </Flex>

                {/* Hamburger Icon for Mobile */}
                <IconButton
                    display={{ base: "flex", xl: "none" }}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={onToggle}
                    aria-label="Toggle Navigation"
                />

                {/* Desktop Menu */}
                <Flex
                    align="center"
                    justify={"space-evenly"}
                    w={"80%"}
                    ml={10}
                    spacing={8}
                    display={display}
                >
                    {menuLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <MotionText
                                fontFamily="poppins"
                                mx={4}
                                cursor="pointer"
                                fontWeight={
                                    isActive(link.href) ? "bold" : "normal"
                                }
                                color="white"
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
                        <Link href={button.href}>
                            <ChakraButton
                                key={button.id}
                                variant={button.variant}
                                mr={4}
                                color={"white"}
                                _hover={{ bg: "brown" }}
                                _active={{ bg: "brown" }}
                                bg={"#855c3c"}
                                borderRadius="xl"
                            >
                                {button.label}
                            </ChakraButton>
                        </Link>
                    ))}

                    {/* Language Dropdown */}
                    <Box
                        borderLeft={"1px"}
                        px={5}
                        display="flex"
                        alignItems="center"
                    >
                        <Menu>
                            <Flex align="center" bgColor={"saddlebrown"} pl={"4"} pr={"8"} py={"2"} rounded={"lg"}>
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
                            <MenuButton
                                as={IconButton}
                                icon={<ChevronDownIcon />}
                                ml={4}
                                color={"brown"}
                                aria-label="Select Language"
                                _hover={{ bg: "yellow.500" }}
                                _active={{ bg: "yellow.500" }}
                            />
                            <MenuList bg={"brown"} px={2} op>
                                <MenuItem
                                    bg={"brown"}
                                    _hover={{ bg: "brown" }}
                                    _active={{ bg: "brown" }}
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
                                    bg={"brown"}
                                    _hover={{ bg: "brown" }}
                                    _active={{ bg: "brown" }}
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
            </Flex>

            {/* Mobile Menu */}
            <Collapse in={isOpen}>
                <Box
                    display={{ base: "block", xl: "none" }}
                    p={4}
                    bg="white"
                    borderBottom="1px"
                    borderColor="gray.200"
                >
                    <Flex direction="column" align="center">
                        {menuLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                px={4}
                                py={2}
                                borderRadius={"xl"}
                                color={"black"}
                                _hover={{ bg: "brown.100" }}
                                _active={{ bg: "brown.100" }}
                            >
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
                                <Link href={button.href}>
                                    <ChakraButton
                                        key={button.id}
                                        variant={button.variant}
                                        mb={2}
                                        borderRadius="xl"
                                    >
                                        {button.label}
                                    </ChakraButton>
                                </Link>
                            ))}
                        </Flex>

                        <Box
                            borderLeft={"1px"}
                            px={5}
                            display="flex"
                            alignItems="center"
                        >
                            <Menu>
                                <Flex justifyContent={"center"} alignItems={"center"}>
                                    <Flex align="center" bgColor={"saddlebrown"} px={"4"} py={"2"} rounded={"lg"}>
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
                                    <MenuButton
                                        as={IconButton}
                                        icon={<ChevronDownIcon />}
                                        ml={4}
                                        color={"white"}
                                        aria-label="Select Language"
                                        bg="brown"
                                        _hover={{ bg: "brown" }}
                                        _active={{ bg: "brown" }}
                                    />
                                </Flex>
                                <MenuList bg={"brown"} px={2} op>
                                    <MenuItem
                                        bg={"brown"}
                                        _hover={{ bg: "brown" }}
                                        _active={{ bg: "brown" }}
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
                                        bg={"brown"}
                                        _hover={{ bg: "brown" }}
                                        _active={{ bg: "brown" }}
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
                </Box>
            </Collapse>
        </MotionBox>
    );
};

export default Navbar;
