import React from "react";
import { Text } from "@chakra-ui/react";
import HeaderText from "../Text/HeaderText";

const Home2 = () => {
    return (
        <>
            <HeaderText size="large" withIcon={true} iconColor="green">
                Hidupkan Perangkatmu dengan GoCas
            </HeaderText>
            <HeaderText size="normal" withIcon={true} iconColor="black">
                Explore in Black
            </HeaderText>
            <HeaderText size="large" withIcon={false} iconColor="green">
                Hidupkan Perangkatmu dengan GoCas
            </HeaderText>
            <HeaderText size="normal" withIcon={false} iconColor="black">
                Explore in Black
            </HeaderText>
        </>
    );
};

export default Home2;
