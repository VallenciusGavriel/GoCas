import React from "react";
import { Text as ChakraText, Image, Box } from "@chakra-ui/react";

const HeaderText = ({
    children,
    size,
    withIcon = false,
    iconColor,
    inputclass,
    className,
    topMargin = 0,
    textAlign = "start",
    mx = 0,
}) => {
    const fontSizeMapping = {
        large: "7xl",
        normal: "5xl",
        small: "xl",
        tiny: "base",
    };
    const fontSize = fontSizeMapping[size];

    const iconDimensions = {
        "7xl": { width: "44px", height: "44px" },
        "5xl": { width: "40px", height: "40px" },
        xl: { width: "32px", height: "32px" },
        base: { width: "18px", height: "18px" },
    };
    const { width, height } = iconDimensions[fontSize] || {
        width: "18px",
        height: "18px",
    };

    const letterSpacing = size === "large" ? "wider" : "wide";
    const marginTop = size === "large" ? "-4" : "-10";
    const lineHeight =
        {
            large: "1.2",
            normal: "1.1",
            small: "1.5",
            tiny: "1.6",
        }[size] || "normal";

    const colorMapping = {
        green: "#28B67A",
        black: "black",
        white: "white",
        red: "#FF0000",
        yellow: "#E7BE0B",
        brown: "#63412A",
    };
    const textColor = colorMapping[iconColor] || "black";

    const iconSrc =
        withIcon && iconColor
            ? `/images/home/listrik-mini-${iconColor}.png`
            : null;

    return (
        <Box mt={topMargin} display="flex" alignItems="center" className={className}>
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
                lineHeight={lineHeight}
                className={inputclass}
                textAlign={textAlign}
                mx={mx}
            >
                {children}
            </ChakraText>
        </Box>
    );
};

export default HeaderText;
