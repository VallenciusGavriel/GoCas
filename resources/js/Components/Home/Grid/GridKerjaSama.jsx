import React from "react";
import { Grid, Image } from "@chakra-ui/react";

const GridKerjaSama = ({ images }) => {
    return (
        <Grid templateColumns="repeat(6, 1fr)" gap={2}>
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    objectFit="cover"
                    boxSize="50%"
                />
            ))}
        </Grid>
    );
};

export default GridKerjaSama;
