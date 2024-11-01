import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from "@chakra-ui/react";

const FAQItem = ({ question, answer }) => {
    return (
        <>
            <AccordionItem>
                <AccordionButton
                    py={4}
                    _expanded={{ bg: "#31933E", color: "white" }}
                >
                    <Box flex="1" textAlign="left">
                        <Text fontSize="lg" fontWeight="bold">
                            {question}
                        </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize="md">
                    {answer}
                </AccordionPanel>
            </AccordionItem>
        </>
    );
};

export default FAQItem;
