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

const About = () => {
  const size = useBreakpointValue({
    base: { height: "100vh", width: "auto" },
    xl: { width: "full", height: "auto" },
  });

    return (
      <div className={"overflow-x-hidden"}>
        <Navbar />
        <Head title="Tentang Kami" />
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
        <VStack
          alignItems={"start"}
          justifyContent={"center"}
          px={"10%"}
          py={"48px"}
          minH={"50vh"}
        >
          <HeaderText iconColor={"green"} size={"large"} inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"} withIcon={false}>Komitmen Kami pada Masyarakat</HeaderText>
          <Flex mt={"48px"} gap={8} direction={{md: "row", base: "column"}}>
            <VStack alignItems={"start"} justifyContent={"start"} w={{base: "100%", md: "50%"}}>
              <Image
                src={EcoFriendly}
                alt="Eco Friendly"
                w="100px"
                objectFit="contain"
              />
              <HeaderText topMargin={12} iconColor={"black"} size={"normal"} inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"} withIcon={false}>Powerbank Ramah Lingkungan</HeaderText>
              <Text fontFamily="poppins">
                GOCAS menggunakan powerbank berkualitas tinggi yang didesain tahan lama serta ramah lingkungan, untuk mendukung gaya hidup yang lebih berkelanjutan.
              </Text>
            </VStack>
            <VStack alignItems={"start"} justifyContent={"start"} w={{base: "100%", md: "50%"}}>
              <Image
                src={Community}
                alt="Community"
                w="100px"
                objectFit="contain"
              />
              <HeaderText topMargin={12} iconColor={"black"} size={"normal"} inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"} withIcon={false}>Masyarakat terbebas dari low baterai</HeaderText>
              <Text fontFamily="poppins">
                Kami berkomitmen untuk memastikan Anda tetap terhubung tanpa gangguan. Dengan GOCAS, low baterai bukan lagi masalah!
              </Text>
            </VStack>
          </Flex>
        </VStack>
        <VStack
          alignItems={"start"}
          bgColor={"#fbd00f"}
          px={"10%"}
          py={"48px"}
        >
          <HeaderText iconColor={"black"} size={"large"} inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"} withIcon={false}>
            Layanan kami
          </HeaderText>
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="xl"
            my={"48px"}
            p={8}
            backgroundColor="white"
            boxShadow="xl"
            w="full"
          >
            <Flex gap={8} direction={{md: "row", base: "column"}}>
              <Image
                src={PBShare}
                alt="Powerbank Share"
                w="100px"
                objectFit="contain"
              />
              <VStack alignItems={"start"} justifyContent={"start"}>
                <HeaderText topMargin={10} iconColor={"black"} size={"normal"} withIcon={false} inputclass={"xl:!text-3xl md:!text-3xl !text-2xl"}>Power bank sharing</HeaderText>
                <Text fontFamily="poppins">
                  Powerbank GoCas adalah solusi terbaik untuk menjaga smartphone, kamera, atau perangkat seluler Anda agar tetap terisi daya saat bepergian. Dengan teknologi canggih dan sistem powerbank sharing, anda bisa dengan mudah menyewa powerbank kapan saja dan di mana saja melalui GoCas Station terdekat!
                </Text>
              </VStack>
            </Flex>
          </Box>
        </VStack>
        <Footer />
      </div>
    );
};

export default About;
