// Home3.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";
import GridKerjaSama from "./Grid/GridKerjaSama"; // Make sure the path is correct
import * as kerjasamaImages from "./../../Assets/kerjasamaImages"; // Adjust the path as necessary

const imageSources = [
    kerjasamaImages.ashta,
    kerjasamaImages.botani,
    kerjasamaImages.cp,
    kerjasamaImages.kai,
    kerjasamaImages.lippo,
    kerjasamaImages.mc,
    kerjasamaImages.mrt,
    kerjasamaImages.pi,
    kerjasamaImages.pp,
    kerjasamaImages.puri,
    kerjasamaImages.pvj,
    kerjasamaImages.tj,
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
        </>
    );
};

export default Home3;
