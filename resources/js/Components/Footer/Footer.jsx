import React from "react";
import {Box, Text, Flex, Image, Icon, Link, Grid} from "@chakra-ui/react";
import {
    FaWhatsapp,
} from "react-icons/fa";
import GoCasLogo from "./../../../../public/images/navbar/gocas-logo.png";
import AppStore from "./../../../../public/images/navbar/appstore.png";
import GPlay from "./../../../../public/images/navbar/gplay.png";
import FB from "./../../../../public/images/navbar/fb.png";
import IG from "./../../../../public/images/navbar/ig.png";
import LinkedIn from "./../../../../public/images/navbar/linkedin.png";
import Tiktok from "./../../../../public/images/navbar/tiktok.png";
import X from "./../../../../public/images/navbar/x.png";

const Footer = () => {
    return (
        <Box px={8} py={4} bgGradient='linear(to-b, #e8a72f, #ee7425)' color="gray.700">
            <Flex
                direction={{base:"column", md: "row"}}
                justifyContent={{base:"left", md: "space-between"}}
                alignItems={{base:"left", md: "center"}}
                gap={10}
                mb={6}
                px={2}
            >
                <Box
                    color={"white"}
                >
                    <Image
                        src={GoCasLogo}
                        alt="GoCas logo"
                        mb={2}
                        boxSize="120px"
                        objectFit="contain"
                    />
                    <Text mb={0} fontFamily="poppins" fontWeight={"extrabold"}>
                        PT Makmur Tech Indonesia
                    </Text>
                    <Text mb={0} fontFamily="poppins">
                        Rukan Sedayu Square Blok N No 06,
                    </Text>
                    <Text mb={0} fontFamily="poppins">
                        Cengkareng, Jakarta Barat
                    </Text>
                    <Text mb={4} fontFamily="poppins">
                        support@gocas.id
                    </Text>
                </Box>
                <Box
                  color={"white"}
                  fontWeight={"extrabold"}
                  w={"50%"}
                >
                    <Grid
                      templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                      gap={{ base: 2, md: 6 }}
                    >
                        <Link href={"/about"}>Tentang Kami</Link>
                        <Link href={"/users"}>Pengguna</Link>

                        <Link href={"/location"}>Lokasi</Link>
                        <Link href={"/partnership"}>Partnership</Link>

                        <Link href={"/products"}>Produk</Link>
                        <Link href={"/faq"}>FAQ</Link>
                    </Grid>
                </Box>
                <Box
                  color={"white"}
                  fontWeight={"extrabold"}
                >
                    <Text mb={3}>
                        Download sekarang di
                    </Text>
                    <Link href={"https://play.google.com"}>
                        <Image
                          src={GPlay}
                          alt="Google Play"
                          mb={2}
                          w={"200px"}
                          objectFit="contain"
                        />
                    </Link>
                    <Link href={"https://www.apple.com/id/app-store/"}>
                        <Image
                          src={AppStore}
                          alt="Apple Store"
                          w={"200px"}
                          objectFit="contain"
                        />
                    </Link>
                </Box>
            </Flex>
            <Flex
              direction={{base:"column-reverse", md: "row"}}
              align={"center"}
              justify={"space-between"}
              color={"white"}
              borderTop={"1px"}
              gap={10}
              py={8}
              px={2}
            >
                <Text textAlign="center" fontFamily="poppins" fontWeight={"bold"}>
                    Copyrights ©2024 GoCas. All Rights Reserved
                </Text>
                <Flex
                  gap={4}
                    textAlign={"center"}
                    align={"center"}
                  direction={{md: "row", base: "column"}}
                >
                    <Text>Ikuti Kami</Text>
                    <Flex
                      gap={4}
                      textAlign={"center"}
                      align={"center"}
                    >
                        <Link
                          href={"https://www.instagram.com/gocasindonesia"}
                        >
                            <Image
                              src={IG}
                              alt="Instagram"
                              w={8}
                              h={8}
                              objectFit="contain"
                            />
                        </Link>
                        <Link
                          href={"https://www.tiktok.com/@gocasindonesia?_t=8qdW7ChFe3r&_r=1"}
                        >
                            <Image
                              src={Tiktok}
                              alt="Tiktok"
                              w={8}
                              h={8}
                              objectFit="contain"
                            />
                        </Link>
                        <Link
                          href={"https://x.com/gocasindonesia?t=Bf5ybbiFLpMNoDciaBXiVw&s=09"}
                        >
                            <Image
                              src={X}
                              alt="X"
                              w={8}
                              h={8}
                              objectFit="contain"
                            />
                        </Link>
                        <Link
                          href={"https://www.linkedin.com/company/gocasindonesia/"}
                        >
                            <Image
                              src={LinkedIn}
                              alt="LinkedIn"
                              w={8}
                              h={8}
                              objectFit="contain"
                            />
                        </Link>
                        <Link
                          href={"https://www.facebook.com/profile.php?id=61567799393691&mibextid=ZbWKwL"}
                        >
                            <Image
                              src={FB}
                              alt="FB"
                              w={8}
                              h={8}
                              objectFit="contain"
                            />
                        </Link>
                        <Link
                          href={"https://wa.me/6282188886665"}
                        >
                            <Icon as={FaWhatsapp} w={8} h={8} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
