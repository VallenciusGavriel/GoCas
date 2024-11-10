import React from "react";
import { List, ListItem, Circle, Box, Text } from "@chakra-ui/react";

const StepList = ({ steps }) => (
    <List spacing={10} position="relative">
        {steps.map((step, index) => (
            <ListItem
                key={index}
                display="flex"
                alignItems="flex-start"
                position="relative"
            >
                <Circle
                    size="30px"
                    bg="green.500"
                    color="white"
                    fontWeight="bold"
                    mr={4}
                    zIndex="2"
                >
                    {index + 1}
                </Circle>
                <Text
                    fontSize="md"
                    color="black"
                    flex="1"
                    textAlign="start"
                    fontWeight="bold"
                    fontFamily="poppins"
                >
                    {step}
                </Text>
                {index < steps.length - 1 && (
                    <Box
                        position="absolute"
                        width="6px"
                        bg="green.500"
                        height="150%"
                        top="28px"
                        left="12px"
                        zIndex="1"
                    />
                )}
            </ListItem>
        ))}
    </List>
);

export default StepList;
