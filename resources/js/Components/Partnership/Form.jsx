import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    VStack,
    useToast,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';


const Form = () => {
    const [formData, setFormData] = useState({
        namaPerusahaan: '',
        namaPengirim: '',
        noHp: '',
        email: '',
        tipeBisnis: '',
        pesan: '',
    });
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = '6282188886665';
        const message = `\nNama Perusahaan: ${formData.namaPerusahaan}\nNama Pengirim: ${formData.namaPengirim}\nEmail: ${formData.email}\nTipe Bisnis: ${formData.tipeBisnis}\nPesan: ${formData.pesan}
        `;
        const encodedMessage = encodeURIComponent(message);
        const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(waLink, '_blank');

        toast({
            title: 'Redirecting to WhatsApp',
            description: 'You will be redirected to WhatsApp to send your message.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });

        setFormData({
            namaPerusahaan: '',
            namaPengirim: '',
            noHp: '',
            email: '',
            tipeBisnis: '',
            pesan: '',
        });
    };

    return (
        <Box width="full" maxWidth="500px" mx="auto" p={6} boxShadow="md" rounded="md" bg="yellow.50">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl id="namaPerusahaan" isRequired>
                        <FormLabel>Nama Perusahaan</FormLabel>
                        <Input
                            type="text"
                            name="namaPerusahaan"
                            value={formData.namaPerusahaan}
                            onChange={handleChange}
                            placeholder="Masukkan nama perusahaan"
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="namaPengirim" isRequired>
                        <FormLabel>Nama Pengirim</FormLabel>
                        <Input
                            type="text"
                            name="namaPengirim"
                            value={formData.namaPengirim}
                            onChange={handleChange}
                            placeholder="Masukkan nama pengirim"
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="noHp" isRequired>
                        <FormLabel>No. Hp</FormLabel>
                        <Input
                            type="tel"
                            name="noHp"
                            value={formData.noHp}
                            onChange={handleChange}
                            placeholder="Masukkan nomor HP"
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukkan alamat email"
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="tipeBisnis" isRequired>
                        <FormLabel>Tipe Bisnis</FormLabel>
                        <Select
                            name="tipeBisnis"
                            value={formData.tipeBisnis}
                            onChange={handleChange}
                            placeholder="Pilih tipe bisnis"
                            bg="white"
                        >
                            <option value="B2B">B2B</option>
                            <option value="B2C">B2C</option>
                            <option value="Non-profit">Non-profit</option>
                            <option value="Lainnya">Lainnya</option>
                        </Select>
                    </FormControl>

                    <FormControl id="pesan">
                        <FormLabel>Pesan</FormLabel>
                        <Textarea
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Tulis pesan Anda di sini"
                            bg="white"
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="yellow" width="full">
                        Kirim
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default Form;
