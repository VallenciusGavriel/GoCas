import React from "react";
import { Text, Box } from "@chakra-ui/react";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const StyledHeader = ({ text }) => {
    const parts = text.split(/(\*[^*]+\*)/g);

    return (
        <HeaderText
            px={0}
            topMargin={12}
            iconColor={"black"}
            size={"normal"}
            inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"}
            withIcon={false}
            styled={true}
        >
            {parts.map((part, index) =>
                part.startsWith("*") && part.endsWith("*") ? (
                    <Box as="span" key={index} fontStyle="italic">
                        {part.slice(1, -1)}
                    </Box>
                ) : (
                    part
                )
            )}
        </HeaderText>
    );
};

export default StyledHeader;
