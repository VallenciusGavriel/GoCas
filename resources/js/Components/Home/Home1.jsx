import React from "react";
import { Grid, Box, Image, Text, Spacer, Button } from "@chakra-ui/react";
import Listrik from "./../../../../public/images/home/listrik.png";
import HeaderText from "./../Text/HeaderText";

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
                <HeaderText size="normal" withIcon={false} iconColor="green">
                    Hidupkan Perangkatmu dengan
                </HeaderText>
                <HeaderText size="large" withIcon={false} iconColor="green">
                    GoCas
                </HeaderText>
                <Text fontFamily="poppins">
                    Solusi lengkap untukmu yang hidup dengan perangkat
                    kesayanganmu!
                </Text>
                <Button
                    bg="#28B67A"
                    textColor="white"
                    mt={4}
                    borderRadius="0"
                    fontWeight="bold"
                    fontFamily="poppins"
                >
                    Mulai Sekarang!
                </Button>
            </Box>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mt={28}
                zIndex="10"
            >
                <Image
                    src={Listrik}
                    alt="Listrik"
                    w="20%"
                    h="auto"
                    objectFit="cover"
                />
            </Box>
        </Grid>
    );
};

export default Home1;
