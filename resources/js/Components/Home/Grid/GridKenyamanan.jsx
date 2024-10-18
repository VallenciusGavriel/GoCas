import React from "react";
import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";
import HeaderText from "../../Text/HeaderText";

const GridKenyamanan = ({ kenyamanans, columnsMd = 3 }) => {
    return (
        <Grid
            templateColumns={{ base: "1fr", md: `repeat(${columnsMd}, 1fr)` }}
            gap={6}
            py={2}
        >
            {kenyamanans.map((kenyamanan, index) => (
                <Box
                    key={index}
                    p={10}
                    shadow="md"
                    borderWidth="1px"
                    backgroundColor="white"
                >
                    <Image
                        src={kenyamanan.imgSrc}
                        alt={kenyamanan.title}
                        borderRadius="md"
                    />
                    <HeaderText
                        size="small"
                        iconColor="yellow"
                        withIcon={false}
                    >
                        {kenyamanan.title}
                    </HeaderText>
                    <Text mt={2} fontFamily="Poppins">
                        {kenyamanan.description}
                    </Text>
                    {kenyamanan.buttons &&
                        kenyamanan.buttons.map((button, idx) => (
                            <Button
                                key={idx}
                                mt={3}
                                mr={idx > 0 ? 2 : 2}
                                bg={idx === 0 ? "white" : "#E7BE0B"}
                                color={idx === 0 ? "black" : "white"}
                                borderColor={
                                    idx === 0 ? "#E7BE0B" : "transparent"
                                }
                                borderWidth={idx === 0 ? "1px" : "0px"}
                                borderRadius="0"
                                fontWeight="bold"
                                fontFamily="Poppins"
                                onClick={button.action}
                            >
                                {button.label}
                            </Button>
                        ))}
                </Box>
            ))}
        </Grid>
    );
};

export default GridKenyamanan;
