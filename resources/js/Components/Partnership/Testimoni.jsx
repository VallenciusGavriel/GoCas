import React from 'react';
import { Box, Text, Avatar, Heading } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        text: "Gocas sangat memudahkan saya! Saat baterai ponsel hampir habis di tengah perjalanan, saya cukup membuka aplikasi Gocas dan menemukan mesin terdekat untuk menyewa powerbank. Prosesnya cepat dan mudah. Yang paling saya suka adalah uang saya dikembalikan sebagian jika powerbank masih memiliki sisa daya saat dikembalikan. Sangat praktis dan ekonomis!",
        name: "Siti Rahmawati",
        position: "Karyawan Swasta",
        image: "https://example.com/siti.jpg", // Replace with actual image URL
    },
    {
        text: "Sebagai pengemudi ojek online, Gocas sangat membantu aktivitas sehari-hari saya. Ketika baterai ponsel hampir habis, saya bisa dengan mudah menyewa powerbank melalui aplikasi. Pengembaliannya pun fleksibel, bisa di mesin mana saja. Sistem cashback jika powerbank tidak kosong saat dikembalikan benar-benar menguntungkan!",
        name: "Ahmad Fauzi",
        position: "Pengemudi Ojek Online",
        image: "https://example.com/ahmad.jpg", // Replace with actual image URL
    },
    {
        text: "Gocas adalah solusi terbaik bagi saya yang sering lupa membawa charger. Aplikasinya user-friendly, dan saya bisa menyewa powerbank kapan saja dibutuhkan. Uang saya dikembalikan sebagian jika powerbank belum habis saat dikembalikan, jadi tidak merasa rugi. Terima kasih Gocas!",
        name: "Lina Kusuma",
        position: "Mahasiswa",
        image: "https://example.com/lina.jpg", // Replace with actual image URL
    },
    {
        text: "Saat menghadiri konferensi bisnis, Gocas sangat membantu saya tetap terhubung. Menyewa dan mengembalikan powerbank sangat mudah melalui aplikasi. Sistem pengembalian uang jika powerbank masih memiliki sisa daya adalah fitur yang sangat adil dan transparan.",
        name: "Budi Santoso",
        position: "Profesional Bisnis",
        image: "https://example.com/budi.jpg", // Replace with actual image URL
    },
    {
        text: "Saya sangat terbantu dengan Gocas saat traveling. Bisa menyewa powerbank dengan cepat dan mengembalikannya di mesin mana saja. Cashback yang diberikan jika powerbank tidak kosong saat dikembalikan membuat layanan ini semakin menarik. Sangat direkomendasikan!",
        name: "Maya Putri",
        position: "Traveler",
        image: "https://example.com/maya.jpg", // Replace with actual image URL
    },
    {
        text: "Gocas menjadi penyelamat saat saya menghadiri konser musik. Baterai ponsel saya hampir habis, dan saya membutuhkan untuk mengambil foto dan berkomunikasi dengan teman-teman. Menyewa powerbank melalui aplikasi sangat mudah, dan saya senang mendapatkan sebagian uang kembali karena powerbank belum habis saat dikembalikan.",
        name: "Rudi Hartono",
        position: "Penggemar Musik",
        image: "https://example.com/rudi.jpg", // Replace with actual image URL
    }
];


const Testimoni = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box width="full" maxWidth="800px" mx="auto" py={10} px={4}>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Box
                        key={index}
                        bg="yellow.50"
                        p={6}
                        rounded="md"
                        shadow="md"
                        textAlign="center"
                    >
                        <Text fontSize="xl" mb={4} color="yellow.700">
                            "{testimonial.text}"
                        </Text>
                        <Avatar src={testimonial.image} name={testimonial.name} mb={2} mx="auto" />
                        <Text fontWeight="bold" fontSize={"xl"} color="yellow.800">{testimonial.name}</Text>
                        <Text fontSize="lg" color="yellow.600">{testimonial.position}</Text>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Testimoni;
