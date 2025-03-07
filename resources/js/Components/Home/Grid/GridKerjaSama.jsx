import React from "react";
import { Grid, Image, Box } from "@chakra-ui/react";

const GridKerjaSama = ({ images, className, color }) => {
    return (
        <Grid
            templateColumns={{
                base: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
            }}
            gap={1}
            className={className}
        >
            {images.map((src, index) => (
                <Box
                    key={index}
                    border="2px"
                    borderColor={color ?? "yellow.400"}
                    overflow="hidden"
                    p="4"
                    h={{base: "80px", xl: "120px"}}
                >
                    <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        objectFit="contain"
                        loading="lazy"
                        w="100%"
                        h="100%"
                    />
                </Box>
            ))}
        </Grid>
    );
};

export default GridKerjaSama;
