import React from "react";
import {Box, Flex, Image, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/partnership/bg1.png";
import Background2 from "../../../public/images/partnership/bg2.png";
import Background3 from "../../../public/images/partnership/bg3.png";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import GridKerjaSama from "@/Components/Home/Grid/GridKerjaSama.jsx";
import * as kerjasamaImages from "@/Assets/kerjasamaImages.js";
import Testimoni from "@/Components/Partnership/Testimoni.jsx";
import Form from "@/Components/Partnership/Form.jsx";

const About = () => {
  const size = useBreakpointValue({
    base: { height: "100vh", width: "auto" },
    xl: { width: "full", height: "auto" },
  });

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
        <Box minH={"100vh"} mt={"90px"}>
          <VStack
            spacing={0}
            bgImage={Background}
            minH={"100vh"}
            h={size.height}
            w={size.width}
            bgSize="cover"
            bgPos="center"
            alignItems={"start"}
            justifyContent={"center"}
            px={"10%"}
            pt={"48px"}
            pb={"10%"}
            className={"rounded-b-3xl"}
          >
            <Box
              w={{base: "full", lg: "60%"}}
              rounded={"xl"}
              mt={"64px"}
              px={"64px"}
              py={"32px"}
              shadow={"2xl"}
              bgGradient='linear(to-b, yellow.300 60%, green.200)'
            >
              <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                KOLABORASI HEBAT DENGAN GOCAS!
              </HeaderText>
              <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"} color={"black"}>
                Ingin membawa solusi sewa power bank ke bisnis atau event kamu? GOCAS membuka peluang kolaborasi bagi partner yang ingin memperluas jaringan dan memberikan layanan lebih bagi pelanggan. Mari bersama-sama ciptakan pengalaman yang lebih praktis dan modern!
              </Text>
            </Box>
              <Box
                  w={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={"xl"}
                  mt={"64px"}
                  px={"64px"}
                  py={"32px"}
                  shadow={"2xl"}
                  bgGradient='linear(to-b, orange.300 20%, orange.200)'
              >
                  <HeaderText size="large" withIcon={true} iconColor="brown" className={"text-center mt-4"}>
                      OUR PARTNER
                  </HeaderText>
                  <GridKerjaSama className={"mt-12"} images={imageSources} />
              </Box>
          </VStack>
            <VStack
                spacing={0}
                bgImage={Background2}
                minH={"100vh"}
                h={size.height}
                w={size.width}
                bgSize="cover"
                bgPos="center"
                alignItems={"end"}
                justifyContent={"end"}
                px={"10%"}
                pt={"48px"}
                pb={"10%"}
            >
                <Box
                    w={{base: "full", lg: "50%"}}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                        Mengapa Bermitra dengan GOCAS?
                    </HeaderText>
                    <ul className={"list-disc list-outside"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                    <ul className={"list-disc list-outside"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                    <ul className={"list-disc list-outside"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                    <ul className={"list-disc list-outside"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                    <ul className={"list-disc list-outside"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                </Box>
            </VStack>
            <VStack
                spacing={0}
                bgImage={Background3}
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
                className={"rounded-t-3xl"}
            >
                <Box
                    w={{base: "full", lg: "50%"}}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                        TESTIMONI
                    </HeaderText>
                    <Testimoni/>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                        Ga perlu susah-susah menyediakan stop kontak, dapatkan hasil tambahan, dan jangkau pengunjungmu lebih luas dengan #MITRAGOCAS
                    </Text>
                </Box>
                <Box
                    w={{base: "full", lg: "50%"}}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                        GABUNG SEKARANG!
                    </HeaderText>
                    <Form/>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                        Ga perlu susah-susah menyediakan stop kontak, dapatkan hasil tambahan, dan jangkau pengunjungmu lebih luas dengan #MITRAGOCAS
                    </Text>
                </Box>
                <Box
                    w={{base: "full", lg: "50%"}}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                        GOCAS Help Center
                    </HeaderText>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                        Email: support@gocas.id
                    </Text>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                        Contact Person: +628773999913
                    </Text>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-sm"}>
                        Social Media: @gocasindonesia
                    </Text>
                </Box>
            </VStack>
        </Box>
        <Footer />
      </div>
    );
};

export default About;
