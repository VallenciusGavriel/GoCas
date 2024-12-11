import {Box, Button, Grid, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import Downloads from "./../../../../public/images/home/downloads.png";
import QRCode from "./../../../../public/images/home/qr-code.png";
import HeaderText from "./../Text/HeaderText";
import GPlay from "../../../../public/images/navbar/gplay.png";
import AppStore from "../../../../public/images/navbar/appstore.png";

const Home1 = () => {
    return (
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            height="80%"
            width="full"
            zIndex="10"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={{ base: "center", md: "flex-end" }}
                alignItems={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
                p="4"
                height="100%"
                zIndex="10"
            >
                <HeaderText
                    iconColor="brown"
                    size="normal"
                    withIcon={false}
                    topMargin={40}
                    inputclass={"xl:!text-5xl md:!text-3xl !text-lg"}
                    px="0px"
                >
                    Isi daya tanpa ribet
                </HeaderText>
                <HeaderText
                    iconColor="brown"
                    size="large"
                    withIcon={false}
                    topMargin={6}
                    inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
                    px="0px"
                >
                    kapanpun
                </HeaderText>
                <HeaderText
                    iconColor="brown"
                    size="large"
                    withIcon={false}
                    topMargin={6}
                    inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
                    px="0px"
                >
                    dimanapun
                </HeaderText>
                <Text
                    mt={6}
                    fontSize="lg"
                    fontFamily="poppins"
                    fontWeight="bold"
                >
                    GoCas Indonesia adalah brand penyewaan Power bank inovatif
                    yang hadir untuk memberikan solusi pengisian daya bagi para
                    pengguna yang aktif dan dinamis.
                </Text>
                <Link href="/location">
                    <Button
                        bgGradient="linear(to-r, #6EA93C, #25893C)"
                        color="white"
                        _hover={{
                            bgGradient: "linear(to-r, green.500, teal.600)",
                        }}
                        borderRadius="full"
                        fontSize="lg"
                        fontFamily="poppins"
                        fontWeight="bold"
                        px={8}
                        py={6}
                        mt={{base: 6, md: 12}}
                        mb={{ base: 10, md: 28 }}
                        boxShadow="md"
                        w={{base: 60, md: "full"}}
                    >
                        <Text fontFamily="poppins" className={"md:text-lg text-xs"}>
                            Temukan GoCas terdekat
                        </Text>
                    </Button>
                </Link>
            </Box>
            <Box
                position={{ base: "relative", md: "absolute" }}
                right={{ md: "0" }}
                bottom={{ md: "0" }}
                p={{ base: "4", md: "28" }}
                width={{ base: "100%", md: "auto" }}
            >
                <HStack
                    justifyContent={{ base: "space-evenly", md: "flex-end" }}
                    spacing={4}
                >
                    <VStack>
                        <Link href={"https://play.google.com/store/apps/details?id=so.dian.gocasid"}>
                            <Image
                                src={GPlay}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                mb={2}
                                w={"200px"}
                                objectFit="contain"
                            />
                        </Link>
                        <Link href={"https://apps.apple.com/id/app/gocas/id6738688391?l=id"}>
                            <Image
                                src={AppStore}
                                alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                                w={"200px"}
                                objectFit="contain"
                            />
                        </Link>
                    </VStack>
                    <Image
                        src={QRCode}
                        alt="QR Code"
                        boxSize={{ base: "100px", md: "150px" }}
                        objectFit="contain"
                    />
                </HStack>
            </Box>
        </Grid>
    );
};

export default Home1;
