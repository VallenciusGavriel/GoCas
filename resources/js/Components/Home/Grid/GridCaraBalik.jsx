import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import HeaderText from "../../Text/HeaderText";

const GridCaraBalik = ({ backs, columnsMd = 3 }) => {
    return (
        <Grid
            templateColumns={{ base: "1fr", md: `repeat(${columnsMd}, 1fr)` }}
            gap={6}
            py={2}
        >
            {backs.map((back, index) => (
                <Box
                    key={index}
                    p={10}
                    shadow="md"
                    borderWidth="1px"
                    backgroundColor="white"
                >
                    <HeaderText
                        size="large"
                        iconColor="yellow"
                        withIcon={false}
                    >
                        {back.title}
                    </HeaderText>
                    <Text mt={2} fontFamily="poppins">
                        {back.description}
                    </Text>
                </Box>
            ))}
        </Grid>
    );
};

export default GridCaraBalik;
