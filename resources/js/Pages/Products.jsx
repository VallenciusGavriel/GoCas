import React from "react";
import {Box, Button, Grid, Link, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import ProductCard from "@/Components/Products/ProductCard";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/products/bg2.jpg";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const Products = ({products}) => {
    const size = useBreakpointValue({
        base: { height: "100vh", width: "auto" },
        xl: { width: "100vw", height: "auto" },
    });

    return (
      <div className={"overflow-x-hidden"}>
        <Navbar />
        <Head title="Produk" />
        <Box minH={"100vh"}>
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
                mt={"30px"}
                pt="64px"
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
                    px={0}
                >
                    Powerbank & GoCas Station
                </HeaderText>
                <Grid
                    mt={10}
                    templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                    gap={10}
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
                py={24}
            >
                <HeaderText px={0} iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                    SOLUSI MUDAH BERSAMA DENGAN GOCAS!
                </HeaderText>
                <Link href={"/partnership"}>
                    <Button
                        bgGradient="linear(to-r, #6EA93C, #25893C)"
                        color="white"
                        _hover={{
                            bgGradient: "linear(to-r, #25893C, #6EA93C)",
                        }}
                        borderRadius="full"
                        fontSize="lg"
                        fontFamily="poppins"
                        fontWeight="bold"
                        px={8}
                        py={6}
                        mt={{base: 6, md: 12}}
                        mb={{ base: 10, md: 28 }}
                        boxShadow="md"
                        w={{base: 48, md: "full"}}
                    >
                        <Text fontFamily="poppins" className={"md:text-lg text-xs"}>
                            KERJA SAMA DENGAN KAMI
                        </Text>
                    </Button>
                </Link>
                <HeaderText px={0} topMargin={10} iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                    Ada Pertanyaan Lain? Tolong Hubungi Kami
                </HeaderText>
                <HeaderText px={0} topMargin={24} iconColor={"brown"} withIcon={false} inputclass={"xl:!text-4xl md:!text-3xl !text-2xl"}>
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
