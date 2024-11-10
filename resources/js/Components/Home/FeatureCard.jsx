import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";

const FeatureCard = ({ icon, title, description }) => {
    return (
        <Box
            bg="#613819"
            p={4}
            borderRadius="xl"
            boxShadow="8px 8px 16px rgba(0, 0, 0, 0.5)"
            width="300px"
            height="300px"
            mt={8}
            display="flex"
            flexDirection="column"
            justifyContent="top"
            alignItems="center"
        >
            <Image src={icon} boxSize="80px" m={2} mt={10} mb={6} />
            <VStack spacing={2} align="stretch" width="100%">
                <Text
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    fontFamily="poppins"
                >
                    {title}
                </Text>
                <Text
                    fontSize="xs"
                    color="white"
                    textAlign="center"
                    fontFamily="poppins"
                >
                    {description}
                </Text>
            </VStack>
        </Box>
    );
};

export default FeatureCard;
