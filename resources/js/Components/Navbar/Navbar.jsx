import React from "react";
import { Flex, Box, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import GocasLogo from "../../../../public/images/navbar/gocas-logo.png"; // Make sure the path is correct

const Navbar = () => {
    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding="4"
                bg="#F2F2F3"
                boxShadow="sm"
            >
                <Flex align="center">
                    <Image src={GocasLogo} alt="GoCas Logo" mr={4} />
                </Flex>

                <Flex gap="4" align="center">
                    <Link to="/lokasi">
                        <Text>Lokasi</Text>
                    </Link>
                    <Link to="/produk">
                        <Text>Produk</Text>
                    </Link>
                    <Link to="/pengguna">
                        <Text>Pengguna</Text>
                    </Link>
                    <Link to="/partner">
                        <Text>Partner</Text>
                    </Link>
                    <Link to="/tentang-kami">
                        <Text>Tentang Kami</Text>
                    </Link>
                    <Button colorScheme="green" size="sm">
                        Masuk
                    </Button>
                    <Button colorScheme="yellow" size="sm">
                        Daftar
                    </Button>
                </Flex>
            </Flex>
        </>
    );
};

export default Navbar;
