import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import ProductCard from "@/Components/Products/ProductCard";
import HeaderText from "@/Components/Text/HeaderText.jsx";
import { useLanguage } from "@/Context/LanguageContext"; // Importing the context hook
import { productsTranslations } from "@/Translates/productsTranslation"; // Import translations
import { Box, Button, Grid, Link, Text, VStack } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import Background from "../../../public/images/products/bg2.jpg";

// Framer Motion wrappers
const MotionBox = motion(Box);
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
            <Navbar />
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
                    <HeaderText
                        size="small"
                        iconColor="black"
                        withIcon={false}
                        inputclass={"xl:!text-5xl md:!text-4xl !text-3xl"}
                        px={0}
                    >
                        {t.heroTitle}
                    </HeaderText>
                    <MotionGrid
                        mt={10}
                        templateColumns={{ base: "1fr", md: `repeat(2, 1fr)` }}
                        gap={10}
                        py={2}
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
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </MotionGrid>
                </MotionVStack>

                {/* Call to Action Section */}
                <MotionVStack
                    spacing={0}
                    bgColor={"#fbd40a"}
                    minH={"60vh"}
                    bgSize="cover"
                    bgPos="center"
                    alignItems={"start"}
                    justifyContent={"center"}
                    px={"10%"}
                    py={24}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 1 }}
                >
                    <HeaderText
                        px={0}
                        iconColor={"brown"}
                        size={"large"}
                        withIcon={false}
                        inputclass={"xl:!text-6xl md:!text-5xl !text-3xl"}
                    >
                        {t.ctaTitle}
                    </HeaderText>
                    <Link href={"/partnership"}>
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
                    <Text
                        fontFamily="poppins"
                        className={"md:text-2xl text-md"}
                    >
                        {t.ctaSubtitle}
                    </Text>
                    <HeaderText
                        px={0}
                        topMargin={16}
                        iconColor={"brown"}
                        withIcon={false}
                        inputclass={"xl:!text-4xl md:!text-3xl !text-2xl"}
                    >
                        {t.helpCenter}
                    </HeaderText>
                    <Text
                        fontFamily="poppins"
                        mt={"36px"}
                        className={"md:text-xl text-sm"}
                    >
                        {t.email}
                    </Text>
                    <Text
                        fontFamily="poppins"
                        mt={"24px"}
                        className={"md:text-xl text-sm"}
                    >
                        {t.contactPerson}
                    </Text>
                    <Text
                        fontFamily="poppins"
                        mt={"24px"}
                        className={"md:text-xl text-sm"}
                    >
                        {t.socialMedia}
                    </Text>
                </MotionVStack>
            </Box>
            <Footer />
        </div>
    );
};

export default Products;
