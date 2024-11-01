import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import StepList from "./StepList";
import HeaderText from "../Text/HeaderText";
import FeatureCard from "./FeatureCard";
import { stepsBorrow, stepsReturn, features } from "./homeData";

const Home3 = () => {
    return (
        <Box p={6}>
            <HeaderText
                iconColor="black"
                size="normal"
                textAlign="center"
                mx="auto"
                topMargin={2}
            >
                Kenapa memilih GoCas?
            </HeaderText>
            <Flex
                wrap="wrap"
                justifyContent="space-around"
                align="center"
                p={5}
                gap={8}
            >
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </Flex>
            <Flex
                direction={["column", "row"]}
                gap={6}
                justify="center"
                align="start"
                maxW="1500px"
                mx="auto"
                mt={20}
            >
                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="black"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara meminjam
                    </HeaderText>
                    <Box
                        bg="rgba(239, 200, 43, 0.85)"
                        p={10}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                        opacity="80%"
                    >
                        <StepList steps={stepsBorrow} />
                    </Box>
                </Box>

                <Box flex="1" textAlign="center">
                    <HeaderText
                        iconColor="black"
                        size="normal"
                        textAlign="center"
                        mx="auto"
                    >
                        Cara pengembalian
                    </HeaderText>
                    <Box
                        bg="rgba(236, 229, 187, 0.85)"
                        p={10}
                        borderRadius="xl"
                        shadow="md"
                        maxW="650px"
                        w="full"
                        mt={10}
                        mx="auto"
                    >
                        <StepList steps={stepsReturn} />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Home3;
