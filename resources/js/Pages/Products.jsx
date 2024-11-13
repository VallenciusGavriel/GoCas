import React from "react";
import {Box, Flex, Image, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/about/bg1.png";
import Community from "../../../public/images/about/community.png";
import EcoFriendly from "../../../public/images/about/ecofriendly.png";
import PBShare from "../../../public/images/about/pbshare.png";
import HeaderText from "@/Components/Text/HeaderText.jsx";

const Products = () => {
  const size = useBreakpointValue({
    base: { height: "100vh", width: "auto" },
    xl: { width: "full", height: "auto" },
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
            minH={"100vh"}
            h={size.height}
            w={size.width}
            bgSize="cover"
            bgPos="center"
            alignItems={"start"}
            justifyContent={"end"}
            px={"10%"}
            pt={"48px"}
            pb={"10%"}
            className={"rounded-b-3xl"}
          >
            <Box
              w={{base: "full", lg: "50%"}}
            >
              <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                Aktifitas tanpa batas dengan GoCas
              </HeaderText>
              <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                Hai! Kami GoCas Indonesia, solusi sewa powerbank berbasis IoT untuk kamu yang aktif dan nggak mau ribet. Dengan teknologi canggih, GoCas memastikan gadget kamu selalu terisi kapan saja dan di mana saja. Sejak diluncurkan, kami telah menyediakan layanan sewa powerbank fleksibel dan praktis.
                <br/>
                <br/>
                Cukup ambil di GoCas Station terdekat, gunakan sepuasnya, dan kembalikan di lokasi lain dengan opsi refund jika tidak digunakan!
              </Text>
            </Box>
          </VStack>
        </Box>
        <Footer />
      </div>
    );
};

export default Products;
