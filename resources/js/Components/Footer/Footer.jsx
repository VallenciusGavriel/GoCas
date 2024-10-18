import React from "react";
import { Box, Text, Flex, Image, Icon, Link } from "@chakra-ui/react";
import {
    FaWhatsapp,
    FaInstagram,
    FaTiktok,
    FaTwitter,
} from "react-icons/fa";
import GoCasLogo from "./../../../../public/images/navbar/gocas-logo.png";

const Footer = () => {
    return (
        <Box px={8} py={4} bgColor="white" color="gray.700">
            <Flex justifyContent="space-between" alignItems="center">
                <Box>
                    <Image
                        src={GoCasLogo}
                        alt="GoCas logo"
                        mb={2}
                        boxSize="120px"
                        objectFit="contain"
                    />
                    <Text mb={0} fontFamily="poppins">
                        PT Makmur Tech Indonesia
                    </Text>
                    <Text mb={0} fontFamily="poppins">
                        Rukan Sedayu Square Blok N No 06,
                    </Text>
                    <Text mb={4} fontFamily="poppins">
                        Cengkareng, Jakarta Barat
                    </Text>
                    <Flex gap={4}>
                        <Link
                          href={"https://www.instagram.com/gocasindonesia"}
                        >
                            <Icon as={FaInstagram} w={8} h={8} />
                        </Link>
                        <Link
                          href={"https://www.tiktok.com/@gocasindonesia?_t=8qdW7ChFe3r&_r=1"}
                        >
                            <Icon as={FaTiktok} w={8} h={8} />
                        </Link>
                        <Link
                          href={"https://x.com/gocasindonesia?t=Bf5ybbiFLpMNoDciaBXiVw&s=09"}
                        >
                            <Icon as={FaTwitter} w={8} h={8} />
                        </Link>
                        <Link
                          href={"https://wa.me/6282188886665"}
                        >
                            <Icon as={FaWhatsapp} w={8} h={8} />
                        </Link>
                    </Flex>
                </Box>
                <Box textAlign="right">
                    <ul>
                        <li>
                            <Link>Lokasi</Link>
                        </li>
                        <li>
                            <Link>Produk</Link>
                        </li>
                        <li>
                            <Link>Pengguna</Link>
                        </li>
                        <li>
                            <Link>Partner</Link>
                        </li>
                        <li>
                            <Link>Tentang Kami</Link>
                        </li>
                    </ul>
                </Box>
            </Flex>
            <Text textAlign="center" mt={8} fontFamily="poppins">
                Hak Cipta © 2024 oleh GoCas
            </Text>
        </Box>
    );
};

export default Footer;
