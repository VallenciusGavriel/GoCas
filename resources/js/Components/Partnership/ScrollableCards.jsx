import { useLanguage } from "@/Context/LanguageContext";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import StyledDescription from "../StyleDescription";

const cards = [
    {
        title: {
            ID: "Tingkatkan Layanan",
            EN: "Enhance Services",
            CH: "提升服务",
        },
        description: {
            ID: "Hadirkan layanan sewa power bank di lokasi bisnis atau *event* Anda dan berikan solusi *charging* yang mudah dan cepat kepada pelanggan.",
            EN: "Provide power bank rental services at your business or event location and offer customers a quick and easy charging solution.",
            CH: "在您的业务或活动地点提供充电宝租赁服务，为客户提供快速便捷的充电解决方案。",
        },
        icon: "/images/partnership/layanan.png",
    },
    {
        title: {
            ID: "Dukungan Teknologi Terdepan",
            EN: "Advanced Technology Support",
            CH: "先进技术支持",
        },
        description: {
            ID: "GoCas dilengkapi dengan mesin sewa power bank modern yang mudah diakses melalui aplikasi. Proses pengembalian pun sangat simpel.",
            EN: "GoCas features modern power bank rental machines easily accessible via the app. The return process is also very simple.",
            CH: "GoCas 配备了通过应用程序轻松访问的现代充电宝租赁机。归还过程也非常简单。",
        },
        icon: "/images/partnership/teknologi.png",
    },
    {
        title: {
            ID: "Dukungan dan Pemeliharaan",
            EN: "Support and Maintenance",
            CH: "支持与维护",
        },
        description: {
            ID: "Tim kami akan memberikan dukungan penuh, mulai dari pemasangan mesin hingga pemeliharaan berkala.",
            EN: "Our team will provide full support, from machine installation to regular maintenance.",
            CH: "我们的团队将提供全方位支持，从机器安装到定期维护。",
        },
        icon: "/images/partnership/maintenance.png",
    },
    {
        title: {
            ID: "Memperluas Jangkauan Bisnis",
            EN: "Expand Business Reach",
            CH: "扩大业务覆盖范围",
        },
        description: {
            ID: "Dengan bermitra, lokasi bisnis Anda akan ditampilkan dalam aplikasi GoCas, memperbesar potensi kunjungan dan *engagement* dari pengguna baru.",
            EN: "By partnering, your business location will be featured in the GoCas app, increasing the potential for visits and engagement from new users.",
            CH: "通过合作，您的业务地点将显示在 GoCas 应用程序中，增加来自新用户的访问和参与潜力。",
        },
        icon: "/images/partnership/jaringan.png",
    },
    {
        title: { ID: "Revenue Sharing", EN: "Revenue Sharing", CH: "收入共享" },
        description: {
            ID: "Dapatkan tambahan pendapatan dengan sistem bagi hasil yang menarik.",
            EN: "Gain additional income with an attractive revenue-sharing system.",
            CH: "通过有吸引力的收入分成系统获得额外收入。",
        },
        icon: "/images/partnership/revenue.png",
    },
];

const ScrollableCards = () => {
    const { language } = useLanguage();

    return (
        <Box w="100%" p={4} overflowX="auto">
            <Flex gap={4}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        minW="250px"
                        borderRadius="md"
                        boxShadow="lg"
                        p={4}
                        bg="white"
                    >
                        <VStack align="flex-start" spacing={2}>
                            <Image
                                src={card.icon}
                                w={"50px"}
                                h={"50px"}
                                alt={card.title[language]}
                            />
                            <Text
                                fontWeight="bold"
                                color={"yellow.500"}
                                fontSize="lg"
                            >
                                {card.title[language]}
                            </Text>
                            {/* <Text fontSize="sm">
                                {card.description[language]}
                            </Text> */}
                            <StyledDescription
                                text={card.description[language]}
                            />
                        </VStack>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ScrollableCards;
