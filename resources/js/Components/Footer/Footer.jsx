import { useLanguage } from "@/Context/LanguageContext";
import { Box, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import AppStore from "./../../../../public/images/navbar/appstore.png";
import FB from "./../../../../public/images/navbar/fb.png";
import GoCasLogo from "./../../../../public/images/navbar/gocas-logo.png";
import GPlay from "./../../../../public/images/navbar/gplay.png";
import IG from "./../../../../public/images/navbar/ig.png";
import LinkedIn from "./../../../../public/images/navbar/linkedin.png";
import Tiktok from "./../../../../public/images/navbar/tiktok.png";
import X from "./../../../../public/images/navbar/x.png";

const Footer = () => {
    const { language } = useLanguage();
    return (
        <Flex
            direction={"column"}
            alignItems={"center"}
            p={4}
            bgGradient="linear(to-b, #e8a72f, #ee7425)"
            color="gray.700"
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={{ base: "left", md: "space-between" }}
                alignItems={{ base: "left", md: "center" }}
                maxW="1200px"
                w={"full"}
                mb={6}
            >
                <Box color={"white"}>
                    <Image
                        src={GoCasLogo}
                        alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                        mb={2}
                        boxSize="120px"
                        objectFit="contain"
                        loading="lazy"
                    />
                    {/*<Text mb={0} fontFamily="poppins" fontWeight={"extrabold"}>*/}
                    {/*    PT Makmur Tech Indonesia*/}
                    {/*</Text>*/}
                    {/*<Text mb={0} fontFamily="poppins">*/}
                    {/*    Rukan Sedayu Square Blok N No 06,*/}
                    {/*</Text>*/}
                    {/*<Text mb={0} fontFamily="poppins">*/}
                    {/*    Cengkareng, Jakarta Barat*/}
                    {/*</Text>*/}
                    <Text mb={4} fontFamily="poppins">
                        support@gocas.id
                    </Text>
                </Box>
                <Box color={"white"} fontWeight={"extrabold"} w={"50%"}>
                    <Grid
                        templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                        gap={{ base: 2, md: 6 }}
                    >
                        <Link href={"/"}>
                            {language === "EN"
                                ? "Home"
                                : language === "CH"
                                ? "首页"
                                : "Beranda"}
                        </Link>
                        <Link href={"/about"}>
                            {language === "EN"
                                ? "About Us"
                                : language === "CH"
                                ? "关于我们"
                                : "Tentang Kami"}
                        </Link>
                        {/*<Link href={"/users"}>Pengguna</Link>*/}
                        <Link href={"/location"}>
                            {language === "EN"
                                ? "Location"
                                : language === "CH"
                                ? "位置"
                                : "Lokasi"}
                        </Link>
                        <Link href={"/partnership"}>
                            {language === "EN"
                                ? "Partnership"
                                : language === "CH"
                                ? "合作伙伴"
                                : "Kemitraan"}
                        </Link>
                        <Link href={"/products"}>
                            {language === "EN"
                                ? "Products"
                                : language === "CH"
                                ? "产品"
                                : "Produk"}
                        </Link>
                        {/*<Link href={"/faq"}>FAQ</Link>*/}
                    </Grid>
                </Box>
                <Box mt={{base: 8, md: 2}} color={"white"} fontWeight={"extrabold"}>
                    <Text mb={3}>
                        {language === "EN"
                            ? "Download now on"
                            : language === "CH"
                            ? "立即下载"
                            : "Unduh sekarang di"}
                    </Text>
                    <Link
                        href={
                            "https://play.google.com/store/apps/details?id=so.dian.gocasid"
                        }
                    >
                        <Image
                            src={GPlay}
                            alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                            mb={2}
                            w={"200px"}
                            objectFit="contain"
                            loading="lazy"
                        />
                    </Link>
                    <Link
                        href={
                            "https://apps.apple.com/id/app/gocas/id6738688391?l=id"
                        }
                    >
                        <Image
                            src={AppStore}
                            alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                            w={"200px"}
                            objectFit="contain"
                            loading="lazy"
                        />
                    </Link>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column-reverse", md: "row" }}
                align={"center"}
                justify={"space-between"}
                color={"white"}
                borderTop={"1px"}
                maxW="1200px"
                w={"full"}
                gap={10}
                py={8}
                px={2}
            >
                <Text
                    textAlign="center"
                    fontFamily="poppins"
                    fontWeight={"bold"}
                >
                    Copyrights ©2025 GoCas. All Rights Reserved
                </Text>
                <Flex
                    gap={4}
                    textAlign={"center"}
                    align={"center"}
                    direction={{ md: "row", base: "column" }}
                >
                    <Text>
                        {language === "EN"
                            ? "Follow Us"
                            : language === "CH"
                            ? "关注我们"
                            : "Ikuti Kami"}
                    </Text>
                    <Flex gap={4} textAlign={"center"} align={"center"}>
                        <Link href={"https://www.instagram.com/gocas.indonesia"}>
                            <Image
                                src={IG}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={8}
                                h={8}
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href={
                                "https://www.tiktok.com/@gocasindonesia?_t=8qdW7ChFe3r&_r=1"
                            }
                        >
                            <Image
                                src={Tiktok}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={8}
                                h={8}
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href={
                                "https://x.com/gocasindonesia?t=Bf5ybbiFLpMNoDciaBXiVw&s=09"
                            }
                        >
                            <Image
                                src={X}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={8}
                                h={8}
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/company/gocasindonesia/"
                            }
                        >
                            <Image
                                src={LinkedIn}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={8}
                                h={8}
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href={
                                "https://www.facebook.com/profile.php?id=61567799393691&mibextid=ZbWKwL"
                            }
                        >
                            <Image
                                src={FB}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={8}
                                h={8}
                                objectFit="contain"
                                loading="lazy"
                            />
                        </Link>
                        <Link href={"https://wa.me/6282188886665"}>
                            <Icon as={FaWhatsapp} w={8} h={8} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;
