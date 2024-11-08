import React from "react";
import {Box, Flex, Image, Text, useBreakpointValue, VStack} from "@chakra-ui/react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import Background from "../../../public/images/partnership/bg1.png";
import Background2 from "../../../public/images/partnership/bg2.png";
import Background3 from "../../../public/images/partnership/bg3.png";
import Background4 from "../../../public/images/partnership/bg4.png";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import GridKerjaSama from "@/Components/Home/Grid/GridKerjaSama.jsx";
import * as kerjasamaImages from "@/Assets/kerjasamaImages.js";
import Testimoni from "@/Components/Partnership/Testimoni.jsx";
import Form from "@/Components/Partnership/Form.jsx";

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
        <Box mt={"90px"}>
          <VStack
            spacing={0}
            bgImage={Background}
            minH={"100vh"}
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
                h={"full"}
              w={{base: "full", lg: "60%"}}
              rounded={"xl"}
              mt={{base: "24px", xl: "64px"}}
              px={{base: "32px", xl: "64px"}}
              py={{base: "24px", xl: "32px"}}
              shadow={"2xl"}
              bgGradient='linear(to-b, yellow.300 60%, green.200)'
            >
              <HeaderText iconColor={"brown"} size={"large"} withIcon={false} className={"xl:mt-0 mt-2"} inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}>
                KOLABORASI HEBAT DENGAN GOCAS!
              </HeaderText>
              <Text fontFamily="poppins" mt={"24px"} className={"md:text-xl text-xs"} color={"black"}>
                Ingin membawa solusi sewa power bank ke bisnis atau event kamu? GOCAS membuka peluang kolaborasi bagi partner yang ingin memperluas jaringan dan memberikan layanan lebih bagi pelanggan. Mari bersama-sama ciptakan pengalaman yang lebih praktis dan modern!
              </Text>
            </Box>
              <Box
                  w={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={"xl"}
                  mt={"64px"}
                  px={{base: "32px", xl: "64px"}}
                  py={{base: "24px", xl: "32px"}}
                  shadow={"2xl"}
                  bgGradient='linear(to-b, orange.300 20%, orange.400)'
              >
                  <HeaderText size="large" withIcon={true} iconColor="white" className={"text-center mt-4 "} inputclass={"xl:!text-6xl md:!text-5xl !text-2xl"}>
                      OUR PARTNER
                  </HeaderText>
                  <GridKerjaSama className={"mt-8 xl:mt-12"} color={"white"} images={imageSources} />
              </Box>
          </VStack>
            <VStack
                spacing={0}
                bgImage={Background2}
                minH={"100vh"}
                bgSize="cover"
                bgPos="center"
                alignItems={"end"}
                justifyContent={"end"}
                px={"10%"}
                pt={"48px"}
                pb={"10%"}
            >
                <Box
                    w={{base: "full", lg: "60%"}}
                    alignItems={"center"}
                    justifyContent={"center"}
                    rounded={"xl"}
                    mt={{base: "30px", xl: "64px"}}
                    px={{base: "32px", xl: "64px"}}
                    py={{base: "36px", xl: "48px"}}
                    shadow={"2xl"}
                    bgGradient='linear(to-b, yellow.300 20%, yellow.400)'
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl xl:mb-8 mb-4"}>
                        Mengapa Bermitra dengan GOCAS?
                    </HeaderText>
                    <ul className={"list-disc list-outside md:text-3xl text-lg font-bold"}>
                        <li>
                            <Text fontFamily="poppins" mt={{base: "4px", xl: "24px"}} className={"md:text-3xl text-lg"}>
                                Tingkatkan Layanan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Hadirkan layanan sewa power bank di lokasi bisnis atau event Anda dan berikan solusi charging yang mudah dan cepat kepada pelanggan.
                    </Text>
                    <ul className={"list-disc list-outside md:text-3xl text-lg font-bold"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-3xl text-lg"}>
                                Dukungan Teknologi Terdepan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        GOCAS dilengkapi dengan mesin sewa power bank modern yang mudah diakses melalui aplikasi. Proses pengembalian pun sangat simpel.
                    </Text>
                    <ul className={"list-disc list-outside md:text-3xl text-lg font-bold"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-3xl text-lg"}>
                                Memperluas Jangkauan Bisnis
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Dengan bermitra, lokasi bisnis Anda akan ditampilkan dalam aplikasi GOCAS, memperbesar potensi kunjungan dan engagement dari pengguna baru.
                    </Text>
                    <ul className={"list-disc list-outside md:text-3xl text-lg font-bold"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-3xl text-lg"}>
                                Dukungan & Pemeliharaan
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Tim kami akan memberikan dukungan penuh, mulai dari pemasangan mesin hingga pemeliharaan berkala.
                    </Text>
                    <ul className={"list-disc list-outside md:text-3xl text-lg font-bold"}>
                        <li>
                            <Text fontFamily="poppins" mt={"24px"} className={"md:text-3xl text-lg"}>
                                Revenue Sharing
                            </Text>
                        </li>
                    </ul>
                    <Text fontFamily="poppins" mt={"8px"} className={"md:text-xl text-sm"}>
                        Dapatkan tambahan pendapatan dengan sistem bagi hasil yang menarik.
                    </Text>
                </Box>
            </VStack>
            <VStack
                spacing={0}
                bgImage={Background3}
                minH={"100vh"}
                bgSize="cover"
                bgPos="center"
                alignItems={"center"}
                justifyContent={"center"}
                px={"10%"}
                pt={"48px"}
                pb={"10%"}
                className={"rounded-3xl"}
            >
                <Flex
                    direction={"column"}
                    my={"auto"}
                    w={"full"}
                    minH={"100vh"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}>
                        TESTIMONI
                    </HeaderText>
                    <Testimoni/>
                    <Text fontFamily="poppins" mt={"24px"} className={"md:text-2xl text-sm text-center"} w={{base: "full", lg: "50%"}}>
                        Ga perlu susah-susah menyediakan stop kontak, dapatkan hasil tambahan, dan jangkau pengunjungmu lebih luas dengan #MITRAGOCAS
                    </Text>
                </Flex>
                <Flex
                    direction={"column"}
                    my={{base: "48px", xl:"auto"}}
                    w={{base: "full", lg: "50%"}}
                    minH={"100vh"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <HeaderText iconColor={"brown"} size={"large"} withIcon={false} inputclass={"xl:!text-6xl md:!text-5xl !text-3xl mb-8 text-center"}>
                        GABUNG SEKARANG!
                    </HeaderText>
                    <Form/>
                </Flex>
            </VStack>
            <VStack
                spacing={0}
                bgImage={Background4}
                minH={"60vh"}
                bgSize="cover"
                bgPos="center"
                alignItems={"start"}
                justifyContent={"center"}
                px={"10%"}
            >
                <Box
                    w={{base: "full", lg: "50%"}}
                >
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
                </Box>
            </VStack>
        </Box>
        <Footer />
      </div>
    );
};

export default About;
