import React from "react";
import { Text as ChakraText, Image, Box } from "@chakra-ui/react";

const HeaderText = ({ children, size, withIcon = false, iconColor }) => {
    const fontSizeMapping = {
        large: "5xl",
        normal: "3xl",
        small: "xl",
        tiny: "base",
    };
    const fontSize = fontSizeMapping[size];

    const iconDimensions = {
        "5xl": { width: "20x", height: "40px" },
        "3xl": { width: "16px", height: "32px" },
        "xl": { width: "16px", height: "32px" },
        "base": { width: "10px", height: "18px" },
    };
    const { width, height } = iconDimensions[fontSize];

    const letterSpacing = size === "large" ? "wider" : "wide";
    const marginTop = size === "large" ? "-4" : "0";

    const colorMapping = {
        green: "#28B67A",
        black: "black",
        white: "white",
        red: "#FF0000",
    };
    const textColor = colorMapping[iconColor] || "black";

    const iconSrc =
        withIcon && iconColor
            ? `/images/home/listrik-mini-${iconColor}.png`
            : null;

    return (
        <Box display="flex" alignItems="center">
            {withIcon && iconSrc && (
                <Image
                    src={iconSrc}
                    alt={`${iconColor} icon`}
                    width={width}
                    height={height}
                    mr={2}
                />
            )}
            <ChakraText
                color={textColor}
                fontFamily='"Dela Gothic One", sans-serif'
                fontSize={fontSize}
                letterSpacing={letterSpacing}
                mt={marginTop}
            >
                {children}
            </ChakraText>
        </Box>
    );
};

export default HeaderText;
