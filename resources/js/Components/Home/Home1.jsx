import React from "react";
import {
    Grid,
    Box,
    Image,
    Text,
    Spacer,
    Button,
    VStack,
    HStack,
} from "@chakra-ui/react";
import Listrik from "./../../../../public/images/home/listrik.png";
import Downloads from "./../../../../public/images/home/downloads.png";
import QRCode from "./../../../../public/images/home/qr-code.png";
import HeaderText from "./../Text/HeaderText";
import { QrCode } from "lucide-react";

const Home1 = () => {
    return (
        <Grid
            templateColumns="repeat(2, 1fr)"
            height="80%"
            width="full"
            zIndex="10"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="flex-start"
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
                >
                    Isi daya tanpa ribet
                </HeaderText>
                <HeaderText
                    iconColor="brown"
                    size="large"
                    withIcon={false}
                    topMargin={6}
                    inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
                >
                    kapanpun
                </HeaderText>
                <HeaderText
                    iconColor="brown"
                    size="large"
                    withIcon={false}
                    topMargin={6}
                    inputclass={"xl:!text-7xl md:!text-5xl !text-3xl"}
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
                <Button
                    bgGradient="linear(to-r, #6EA93C, #25893C)"
                    color="white"
                    _hover={{
                        bgGradient: "linear(to-r, green.500, teal.600)",
                    }}
                    borderRadius="full"
                    fontSize="lg"
                    fontWeight="bold"
                    px={8}
                    py={6}
                    mt={6}
                    mb={28}
                    boxShadow="md"
                >
                    Temukan GoCas terdekat
                </Button>
            </Box>
            <Box position="absolute" right="0" bottom="0" p="28">
                <HStack justifyContent="flex-end" spacing={4}>
                    <Image
                        src={Downloads}
                        alt="Download on the App Store and Google Play"
                        w="25%"
                        h="auto"
                        objectFit="contain"
                    />
                    <Image
                        src={QRCode}
                        alt="QR Code"
                        boxSize="150px"
                        objectFit="contain"
                    />
                </HStack>
            </Box>
        </Grid>
    );
};

export default Home1;
