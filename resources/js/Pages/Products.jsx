import React from "react";
import {Box, Button, Grid, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import ProductCard from "@/Components/Products/ProductCard";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/products/bg2.jpg";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import Background4 from "../../../public/images/partnership/bg4.png";

const Products = ({products}) => {
    const size = useBreakpointValue({
        base: { height: "100vh", width: "auto" },
        xl: { width: "100vw", height: "auto" },
    });

    return (
      <div className={"overflow-x-hidden"}>
        <Navbar />
        <Head title="Produk" />
        <Box minH={"100vh"} mt={"90px"}>
            <VStack
                spacing={0}
                bgImage={Background}
                mb={2}
                h={"full"}
                w={"100vw"}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                alignItems={"start"}
                justifyContent={"end"}
                className={"rounded-b-3xl"}
            >
                <img src={Background} className={"rounded-b-xl"}/>
            </VStack>
            <VStack
                spacing={4}
                mt={12}
                mb={2}
                minH={"100vh"}
                alignItems={"start"}
                justifyContent={"end"}
                px={"10%"}
                pt={"48px"}
                pb={"10%"}
                className={"rounded-b-3xl"}
              >
                <HeaderText
                    size="small"
                    iconColor="black"
                    withIcon={false}
                    inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"}
                >
                    Powerbank & GoCas Station
                </HeaderText>
                <Grid
                    mt={8}
                    templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                    gap={6}
                    py={2}
                >
                    { products.map(function (product) {
                        return (
                            <ProductCard product={product}/>
                        );
                    })}
                </Grid>
          </VStack>
            <VStack
                spacing={0}
                bgColor={"#fbd40a"}
                minH={"60vh"}
                bgSize="cover"
                bgPos="center"
                alignItems={"start"}
                justifyContent={"center"}
                px={"10%"}
            >
                <Text fontFamily="poppins">
                    SOLUSI MUDAH BERSAMA DENGAN GOCAS!
                </Text>
                <Button
                    bgGradient="linear(to-r, #6EA93C, #25893C)"
                    color="white"
                    _hover={{
                        bgGradient: "linear(to-r, brown.500, teal.600)",
                    }}
                    borderRadius="full"
                    fontSize="lg"
                    fontFamily="poppins"
                    fontWeight="bold"
                    px={8}
                    py={6}
                    mt={6}
                    mb={{ base: 10, md: 28 }}
                    boxShadow="md"
                >
                    KERJA SAMA DENGAN KAMI
                </Button>
                <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                    Ada Pertanyaan Lain? Tolong Hubungi Kami
                </HeaderText>
                <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                    GOCAS Help Center
                </HeaderText>
                <Text fontFamily="poppins" mt={"36px"} className={"md:text-xl text-sm"}>
                    Email: support@gocas.id
                </Text>
                <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                    Contact Person: +628773999913
                </Text>
                <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                    Social Media: @gocasindonesia
                </Text>
            </VStack>
        </Box>
        <Footer />
      </div>
    );
};

export default Products;
