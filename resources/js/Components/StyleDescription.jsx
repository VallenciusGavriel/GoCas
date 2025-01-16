import React from "react";
import { Text, Box } from "@chakra-ui/react";

const StyledDescription = ({ text }) => {
    const parts = text.split(/(\*[^*]+\*)/g);

    return (
        <Text fontFamily="poppins">
            {parts.map((part, index) =>
                part.startsWith("*") && part.endsWith("*") ? (
                    <Box as="span" key={index} fontStyle="italic">
                        {part.slice(1, -1)}
                    </Box>
                ) : (
                    part
                )
            )}
        </Text>
    );
};

export default StyledDescription;
