import { Suspense, lazy } from "react";
import {
    Box,
    Button,
    Grid,
    Link,
    Text,
    HStack,
    VStack,
    Image,
    Flex,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useLanguage } from "@/Context/LanguageContext"; // Importing the context hook
import { productsTranslations } from "@/Translates/productsTranslation"; // Import translations

// Lazy load heavy components
const Navbar = lazy(() => import("@/Components/Navbar/Navbar"));
const Footer = lazy(() => import("@/Components/Footer/Footer"));
const ProductCard = lazy(() => import("@/Components/Products/ProductCard"));
const HeaderText = lazy(() => import("@/Components/Text/HeaderText.jsx"));

// Convert images to WebP format
const Background = "/images/products/bg2.webp";
const BackgroundHero = "/images/partnership/bg.webp";
const Hand = "/images/partnership/hand.webp";

// Framer Motion wrappers
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionGrid = motion(Grid);

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
};

const Products = ({ products, meta, schema }) => {
    const { language } = useLanguage();
    const t = productsTranslations[language];

    return (
        <div className={"overflow-x-hidden"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
            </Suspense>
            <Head title="Produk">
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Head>
            <Box minH={"100vh"}>
                {/* Hero Section */}
                <MotionVStack
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
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={Background}
                        alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                        className={"rounded-b-xl"}
                        loading="lazy"
                    />
                </MotionVStack>

                {/* Products Section */}
                <MotionVStack
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 1 }}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderText
                            size="small"
                            iconColor="black"
                            withIcon={false}
                            inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"}
                            px={0}
                        >
                            {t.heroTitle}
                        </HeaderText>
                    </Suspense>
                    <MotionGrid
                        mt={10}
                        templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                        gap={10}
                        py={2}
                        mx={"auto"}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ProductCard product={product} />
                                </Suspense>
                            </motion.div>
                        ))}
                    </MotionGrid>
                </MotionVStack>

                {/* Call to Action Section */}
                <MotionFlex
                    spacing={0}
                    bgImage={BackgroundHero}
                    direction={{ base: "column-reverse", xl: "row" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    minH={{ base: "full", xl: "100vh" }}
                    bgSize="cover"
                    bgPos="center"
                    px={"10%"}
                    py={24}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 1 }}
                >
                    <VStack alignItems={"start"} justifyContent={"center"}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <HeaderText
                                px={0}
                                iconColor={"brown"}
                                size={"large"}
                                withIcon={false}
                                inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}
                                textAlign={{ base: "center", xl: "start" }}
                            >
                                {t.ctaTitle}
                            </HeaderText>
                        </Suspense>
                        <Flex w={"full"}>
                            <Link href={"/partnership"} mx={{ base: "auto", xl: 0 }}>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button
                                        bgGradient="linear(to-r, #6EA93C, #25893C)"
                                        color="white"
                                        _hover={{
                                            bgGradient:
                                                "linear(to-r, #25893C, #6EA93C)",
                                        }}
                                        borderRadius="full"
                                        fontSize="lg"
                                        fontFamily="poppins"
                                        fontWeight="bold"
                                        px={8}
                                        py={6}
                                        mt={{ base: 6, md: 12 }}
                                        mb={{ base: 10, md: 28 }}
                                        mx={"auto"}
                                        boxShadow="md"
                                        w={{ base: 48, md: "full" }}
                                    >
                                        <Text
                                            fontFamily="poppins"
                                            className={"md:text-lg text-xs"}
                                        >
                                            {t.ctaButton}
                                        </Text>
                                    </Button>
                                </motion.div>
                            </Link>
                        </Flex>
                    </VStack>
                    <Image
                        src={Hand}
                        loading="lazy"
                        alt="GoCas - Sewa Powerbank Murah dan Cepat di Indonesia"
                        boxSize={{ base: "90%", xl: "40%" }}
                        m={2}
                        mt={{ base: 0, xl: 10 }}
                        mb={{ base: 20, xl: 6 }}
                    />
                </MotionFlex>
            </Box>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Products;