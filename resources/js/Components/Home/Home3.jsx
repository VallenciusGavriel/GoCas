// Home3.jsx
import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";
import GridKerjaSama from "./Grid/GridKerjaSama"; // Make sure the path is correct
import * as kerjasamaImages from "./../../Assets/kerjasamaImages"; // Adjust the path as necessary

const imageSources = [
    kerjasamaImages.tj,
    kerjasamaImages.mrt,
    kerjasamaImages.kai,
    kerjasamaImages.puri,
    kerjasamaImages.pi,
    kerjasamaImages.pp,
    kerjasamaImages.mc,
    kerjasamaImages.pvj,
    kerjasamaImages.lippo,
    kerjasamaImages.cp,
    kerjasamaImages.botani,
    kerjasamaImages.ashta,
];

const Home3 = () => {
    return (
        <>
            <HeaderText size="normal" withIcon={true} iconColor="green">
                Jalinan Kerjasama GoCas
            </HeaderText>
            <Text fontSize="lg" mb={4}>
                Kami menjalin kerjasama dengan banyak partner kerja yang
                mendukung infrastruktur untuk pelanggan setia Kami.
            </Text>
            <GridKerjaSama images={imageSources} />
            <Flex justifyContent="center" mt={4}>
                <Button
                    bg="#28B67A"
                    textColor="white"
                    borderRadius="0"
                    fontWeight="bold"
                >
                    Temukan Kami
                </Button>
            </Flex>
        </>
    );
};

export default Home3;
