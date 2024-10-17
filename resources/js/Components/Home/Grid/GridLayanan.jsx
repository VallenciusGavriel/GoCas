import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import HeaderText from "./../../Text/HeaderText";

const GridLayanan = ({ services, columnsMd = 3 }) => {
    return (
        <Grid
            templateColumns={{ base: "1fr", md: `repeat(${columnsMd}, 1fr)` }}
            gap={6}
            py={2}
        >
            {services.map((service, index) => (
                <Box
                    key={index}
                    p={10}
                    shadow="md"
                    borderWidth="1px"
                    backgroundColor="white"
                >
                    <Image
                        src={service.imgSrc}
                        alt={service.title}
                        borderRadius="md"
                    />
                    <HeaderText size="small" iconColor="green" withIcon={false}>
                        {service.title}
                    </HeaderText>
                    <Text mt={2}>{service.description}</Text>
                </Box>
            ))}
        </Grid>
    );
};

export default GridLayanan;
