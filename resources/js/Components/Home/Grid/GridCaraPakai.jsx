import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import HeaderText from "../../Text/HeaderText";

const GridCaraPakai = ({ steps, columnsMd = 3 }) => {
    return (
        <Grid
            templateColumns={{ base: "1fr", md: `repeat(${columnsMd}, 1fr)` }}
            gap={6}
            py={2}
        >
            {steps.map((step, index) => (
                <Box
                    key={index}
                    p={10}
                    shadow="md"
                    borderWidth="1px"
                    backgroundColor="white"
                >
                    <HeaderText size="large" iconColor="green" withIcon={false}>
                        {step.title}
                    </HeaderText>
                    <Text mt={2}>{step.description}</Text>
                </Box>
            ))}
        </Grid>
    );
};

export default GridCaraPakai;
