import React from 'react';
import {Box, Text, Avatar, Heading, Flex, VStack, Grid} from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const ProductCard = ({ product }) => {
    return (
        <Box width="full" maxWidth="800px" mx="auto" py={{base: 8, md: 10}} px={{base: 0, md: 4}} bg={"#e7e6ec"} shadow={"lg"} rounded={"xl"}>
            <Flex alignItems={"start"} mt={{base: 0, md: 6}} flexDir={{base: "column", md: "column"}} maxWidth={"w-11/12"}>
                <img src={"../../../images"+product.image_url} alt={product.name} className={"mx-auto w-4/5 md:w-1/2 px-0 mb-10"}/>
                <VStack alignItems={"start"}
                        px={{base: 6, md: 12}}>
                    <HeaderText iconColor={"brown"} size={"large"} inputclass={"xl:!text-5xl md:!text-4xl !text-2xl mb-4"}
                                withIcon={false}>
                        {product.name}
                    </HeaderText>
                    <Grid
                        templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                        gap={8}
                        py={2}
                    >
                        <VStack alignItems={"start"}>
                            <Text fontFamily="poppins" fontSize={"lg"} fontWeight={"bold"}>
                                {product.type === 'Powerbank' ? 'Kapasitas: ' : 'Kekuatan Pengisian: '}
                            </Text>
                            <Text fontFamily="poppins" fontSize={"lg"}>
                                {product.capacity}
                            </Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Text fontFamily="poppins" fontSize={"lg"} fontWeight={"bold"}>
                                {product.type === 'Powerbank' ? 'Kekuatan Daya: ' : 'Berat Bersih: '}
                            </Text>
                            <Text fontFamily="poppins" fontSize={"lg"}>
                                {product.compatibility}
                            </Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Text fontFamily="poppins" fontSize={"lg"} fontWeight={"bold"}>
                                {product.type === 'Powerbank' ? 'Mendukung Kabel: ' : 'Fitur: '}
                            </Text>
                            <Text fontFamily="poppins" fontSize={"lg"}>
                                {product.feature}
                            </Text>
                        </VStack>
                        <VStack alignItems={"start"}>
                            <Text fontFamily="poppins" fontSize={"lg"} fontWeight={"bold"}>
                                Dimensi Ukuran:
                            </Text>
                            <Text fontFamily="poppins" fontSize={"lg"}>
                                {product.dimensi}
                            </Text>
                        </VStack>
                    </Grid>
                </VStack>
            </Flex>
        </Box>
    );
};

export default ProductCard;
