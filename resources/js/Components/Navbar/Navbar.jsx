import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button as ChakraButton,
    Collapse,
    Flex,
    IconButton,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useBreakpointValue,
    useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import languages from "../../../../public/i18n/languages.json";
import GocasLogo from "../../../../public/images/navbar/gocas-logo.png";
import { useLanguage } from "../../Context/LanguageContext";
// Import images

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", xl: "flex" });
    const isVisible = useBreakpointValue({ base: true, xl: false });

    const isActive = (route) => window.location.pathname === route;

    // const [selectedLanguage, setSelectedLanguage] = useState("EN");

    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    // Update these links to reflect your application's pages
    const menuLinks = [
        { name: "about", href: "/about" },
        { name: "location", href: "/location" },
        { name: "products", href: "/products" },
        { name: "partnership", href: "/partnership" },
    ];

    // Update these buttons if needed
    const buttons = [
        {
            label: "Help Center",
            variant: "solid",
            id: "helpButton",
            href: "https://wa.me/6282188886665",
        },
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
            pb={{ base: "24px", md: "16px" }}
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
                                {languages[language][link.name]}
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
                            <MenuButton
                                as={IconButton}
                                px={4}
                                color={"white"}
                                bg={"#855c3c"}
                                _hover={{ bg: "brown" }}
                                _active={{ bg: "brown" }}
                                aria-label="Select Language"
                            >
                                {language === "EN" && "English"}
                                {language === "ID" && "Indonesia"}
                                {language === "CH" && "Chinese"}{" "}
                                <ChevronDownIcon />
                            </MenuButton>
                            <MenuList bg={"brown"} px={4}>
                                <MenuItem
                                    onClick={() => handleLanguageChange("ID")}
                                >
                                    <Text color="black" textAlign="center">
                                        Indonesia
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleLanguageChange("EN")}
                                >
                                    <Text color="black" textAlign="center">
                                        English
                                    </Text>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleLanguageChange("CH")}
                                >
                                    <Text color="black" textAlign="center">
                                        Chinese
                                    </Text>
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
                                    {languages[language][link.name]}
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
                                <Flex
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                >
                                    <MenuButton
                                        as={IconButton}
                                        icon={
                                            <Text>
                                                {language === "EN" && "English"}
                                                {language === "ID" &&
                                                    "Indonesia"}
                                                {language === "CH" && "Chinese"}{" "}
                                                <ChevronDownIcon />
                                            </Text>
                                        }
                                        px={4}
                                        color={"brown"}
                                        aria-label="Select Language"
                                        _hover={{ bg: "yellow.500" }}
                                        _active={{ bg: "yellow.500" }}
                                    />
                                </Flex>
                                <MenuList bg={"brown"} px={4}>
                                    <MenuItem
                                        onClick={() =>
                                            handleLanguageChange("ID")
                                        }
                                    >
                                        <Text color="black" textAlign="center">
                                            Indonesia
                                        </Text>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleLanguageChange("EN")
                                        }
                                    >
                                        <Text color="black" textAlign="center">
                                            English
                                        </Text>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() =>
                                            handleLanguageChange("CH")
                                        }
                                    >
                                        <Text color="black" textAlign="center">
                                            Chinese
                                        </Text>
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
