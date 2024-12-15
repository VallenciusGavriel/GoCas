import React from "react";
import {Box, Flex, Image, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import BackgroundHero from "../../../public/images/partnership/bg.png";
import Hand from "../../../public/images/partnership/hand.png";
import Background from "../../../public/images/partnership/bg1.png";
import Background2 from "../../../public/images/partnership/bg2.png";
import Background3 from "../../../public/images/partnership/bg3.png";
import Background4 from "../../../public/images/partnership/bg4.png";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import GridKerjaSama from "@/Components/Home/Grid/GridKerjaSama.jsx";
import * as kerjasamaImages from "@/Assets/kerjasamaImages.js";
import Testimoni from "@/Components/Partnership/Testimoni.jsx";
import Form from "@/Components/Partnership/Form.jsx";
import ScrollableCards from "@/Components/Partnership/ScrollableCards.jsx";

const About = () => {
    const imageSources = [
        // kerjasamaImages.tj,
        // kerjasamaImages.mrt,
        // kerjasamaImages.kai,
        // kerjasamaImages.puri,
        // kerjasamaImages.pi,
        // kerjasamaImages.pp,
        // kerjasamaImages.mc,
        // kerjasamaImages.pvj,
        // kerjasamaImages.lippo,
        // kerjasamaImages.cp,
        // kerjasamaImages.botani,
        // kerjasamaImages.ashta,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon,
        kerjasamaImages.comingsoon
    ];

    return (
      <div className={"overflow-x-hidden"}>
        <Navbar />
        <Head title="Partnership" />
        <Box>
          <Flex
            spacing={0}
            bgImage={BackgroundHero}
            minH={"100vh"}
            bgSize="cover"
            bgPos="center"
            justifyContent={"end"}
            alignItems={"end"}
            direction={{base: "column-reverse", md: "row"}}
            px={"10%"}
            mt={"60px"}
            pt={"78px"}
            pb={"10%"}
          >
            <Box
              h={"full"}
              w={{base: "full", lg: "60%"}}
              rounded={"xl"}
              mt={{base: "24px", xl: "64px"}}
              px={{base: "32px", xl: "64px"}}
              py={{base: "24px", xl: "32px"}}
            >
              <HeaderText px={0} iconColor={"brown"} size={"large"} withIcon={false} className={"xl:mt-0 mt-2"} inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}>
                KOLABORASI HEBAT DENGAN GOCAS!
              </HeaderText>
              <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-xs"} color={"black"}>
                Ingin membawa solusi sewa power bank ke bisnis atau event kamu? GOCAS membuka peluang kolaborasi bagi partner yang ingin memperluas jaringan dan memberikan layanan lebih bagi pelanggan. Mari bersama-sama ciptakan pengalaman yang lebih praktis dan modern!
              </Text>
            </Box>
          </Flex>
          <VStack
              spacing={0}
              alignItems={"start"}
              justifyContent={"start"}
              px={"10%"}
              pt={"30px"}
              className={"rounded-b-3xl"}
          >
              <HeaderText px={0} size="large" withIcon={false} iconColor="black" className={"text-center"} topMargin={4} inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}>
                  Partner Kami
              </HeaderText>
              <Flex bgColor={"#F0F0F0"} w={"full"} mt={"16px"} py={"40px"} alignItems={"center"} flexDirection={"column"}>
                  <HeaderText px={0} size="large" withIcon={false} iconColor="black" className={"text-center"} topMargin={4} inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}>
                      Coming Soon
                  </HeaderText>
                  <Text mt={"24px"}>
                      Any partner will be visible here
                  </Text>
              </Flex>
              {/*<GridKerjaSama className={"mt-8 xl:mt-12"} color={"white"} images={imageSources} />*/}
          </VStack>
            <VStack
                spacing={0}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                pt={"64px"}
                pb={"64px"}
            >
                <HeaderText px={0} size="small" withIcon={false} iconColor="black" className={"text-center"} topMargin={4} inputclass={"xl:!text-4xl md:!text-2xl !text-xl"}>
                    Manfaat Kerjasama
                </HeaderText>
                <Flex bgColor={"#F0F0F0"} w={"full"} mt={"16px"} py={"3px"} alignItems={"center"} flexDirection={"column"}>
                </Flex>
                <ScrollableCards/>
            </VStack>
            <VStack
                spacing={0}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                className={"rounded-3xl"}
            >
                <HeaderText px={0} iconColor={"black"} size={"large"} withIcon={false} inputclass={"xl:!text-4xl md:!text-2xl !text-xl"}>
                    Testimoni Partner
                </HeaderText>
                <Flex bgColor={"#F0F0F0"} w={"full"} mt={"16px"} py={"3px"} alignItems={"center"} flexDirection={"column"}>
                </Flex>
                <Flex
                    direction={"column"}
                    my={"auto"}
                    w={"full"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Testimoni/>
                </Flex>
            </VStack>
            <Flex
                spacing={0}
                w={"full"}
                alignItems={"start"}
                justifyContent={"start"}
                px={"10%"}
                bgColor={"#17a64e"}
            >
                <Flex
                    direction={"column"}
                    my={"48px"}
                    py={"40px"}
                    ps={{base: "16px", xl: "40px"}}
                    pe={{base: "16px", xl: "0px"}}
                    w={"full"}
                    alignItems={"start"}
                    justifyContent={"center"}
                    bgColor={"white"}
                    flexDir={{base: "column", xl: "row"}}
                >
                    <Box me={{base: "0px", xl: "12px"}} mb={{base: "12px", xl: "0px"}}>
                        <HeaderText px={0} iconColor={"black"} size={"large"} withIcon={false} inputclass={"xl:!text-4xl md:!text-2xl !text-xl mb-2"}>
                            Form Aplikasi Mitra
                        </HeaderText>
                        <Text>
                            Ga perlu susah-susah menyediakan stop kontak, dapatkan hasil tambahan, dan jangkau pengunjungmu lebih luas dengan #MITRAGOCAS
                        </Text>
                    </Box>
                    <Form/>
                </Flex>
            </Flex>
            {/*<VStack*/}
            {/*    spacing={0}*/}
            {/*    bgImage={Background4}*/}
            {/*    minH={"60vh"}*/}
            {/*    bgSize="cover"*/}
            {/*    bgPos="center"*/}
            {/*    alignItems={"start"}*/}
            {/*    justifyContent={"center"}*/}
            {/*    px={"10%"}*/}
            {/*>*/}
            {/*    <Box*/}
            {/*        w={{base: "full", lg: "50%"}}*/}
            {/*    >*/}
            {/*        <HeaderText px={0} iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>*/}
            {/*            GOCAS Help Center*/}
            {/*        </HeaderText>*/}
            {/*        <Text fontFamily="poppins" mt={"36px"} className={"md:text-xl text-sm"}>*/}
            {/*            Email: support@gocas.id*/}
            {/*        </Text>*/}
            {/*        <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>*/}
            {/*            Contact Person: +6282188886665*/}
            {/*        </Text>*/}
            {/*        <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>*/}
            {/*            Social Media: @gocasindonesia*/}
            {/*        </Text>*/}
            {/*    </Box>*/}
            {/*</VStack>*/}
        </Box>
        <Footer />
      </div>
    );
};

export default About;
