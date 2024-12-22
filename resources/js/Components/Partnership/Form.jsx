import { useLanguage } from "@/Context/LanguageContext";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        namaPerusahaan: "",
        namaPengirim: "",
        noHp: "",
        email: "",
        tipeBisnis: "",
        pesan: "",
    });
    const toast = useToast();

    const translations = {
        namaPerusahaan: {
            ID: "Nama Perusahaan",
            EN: "Company Name",
            CH: "公司名称",
        },
        namaPengirim: {
            ID: "Nama Pengirim",
            EN: "Sender Name",
            CH: "发送者姓名",
        },
        noHp: {
            ID: "No. Hp",
            EN: "Phone Number",
            CH: "电话号码",
        },
        email: {
            ID: "Email",
            EN: "Email",
            CH: "电子邮件",
        },
        tipeBisnis: {
            ID: "Tipe Bisnis",
            EN: "Business Type",
            CH: "业务类型",
        },
        pesan: {
            ID: "Pesan",
            EN: "Message",
            CH: "留言",
        },
        placeholder: {
            namaPerusahaan: {
                ID: "Masukkan nama perusahaan",
                EN: "Enter company name",
                CH: "输入公司名称",
            },
            namaPengirim: {
                ID: "Masukkan nama pengirim",
                EN: "Enter sender name",
                CH: "输入发送者姓名",
            },
            noHp: {
                ID: "Masukkan nomor HP",
                EN: "Enter phone number",
                CH: "输入电话号码",
            },
            email: {
                ID: "Masukkan alamat email",
                EN: "Enter email address",
                CH: "输入电子邮件地址",
            },
            pesan: {
                ID: "Tulis pesan Anda di sini",
                EN: "Write your message here",
                CH: "在此处写下您的留言",
            },
        },
        submit: {
            ID: "Kirim",
            EN: "Submit",
            CH: "提交",
        },
        options: {
            B2B: {
                ID: "B2B",
                EN: "B2B",
                CH: "B2B",
            },
            B2C: {
                ID: "B2C",
                EN: "B2C",
                CH: "B2C",
            },
            nonProfit: {
                ID: "Non-profit",
                EN: "Non-profit",
                CH: "非盈利",
            },
            lainnya: {
                ID: "Lainnya",
                EN: "Other",
                CH: "其他",
            },
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = "6282188886665";
        const message = `\n${translations.namaPerusahaan[language]}: ${formData.namaPerusahaan}\n${translations.namaPengirim[language]}: ${formData.namaPengirim}\n${translations.email[language]}: ${formData.email}\n${translations.tipeBisnis[language]}: ${formData.tipeBisnis}\n${translations.pesan[language]}: ${formData.pesan}`;
        const encodedMessage = encodeURIComponent(message);
        const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(waLink, "_blank");

        toast({
            title:
                language === "EN"
                    ? "Redirecting to WhatsApp"
                    : language === "CH"
                    ? "重定向到 WhatsApp"
                    : "Mengalihkan ke WhatsApp",
            description:
                language === "EN"
                    ? "You will be redirected to WhatsApp to send your message."
                    : language === "CH"
                    ? "您将被重定向到 WhatsApp 发送您的消息。"
                    : "Anda akan diarahkan ke WhatsApp untuk mengirim pesan Anda.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        setFormData({
            namaPerusahaan: "",
            namaPengirim: "",
            noHp: "",
            email: "",
            tipeBisnis: "",
            pesan: "",
        });
    };

    return (
        <Box width="full" maxWidth="750px" mx="auto">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl id="namaPerusahaan" isRequired>
                        <FormLabel>
                            {translations.namaPerusahaan[language]}
                        </FormLabel>
                        <Input
                            type="text"
                            name="namaPerusahaan"
                            value={formData.namaPerusahaan}
                            onChange={handleChange}
                            placeholder={
                                translations.placeholder.namaPerusahaan[
                                    language
                                ]
                            }
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="namaPengirim" isRequired>
                        <FormLabel>
                            {translations.namaPengirim[language]}
                        </FormLabel>
                        <Input
                            type="text"
                            name="namaPengirim"
                            value={formData.namaPengirim}
                            onChange={handleChange}
                            placeholder={
                                translations.placeholder.namaPengirim[language]
                            }
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="noHp" isRequired>
                        <FormLabel>{translations.noHp[language]}</FormLabel>
                        <Input
                            type="tel"
                            name="noHp"
                            value={formData.noHp}
                            onChange={handleChange}
                            placeholder={
                                translations.placeholder.noHp[language]
                            }
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="email" isRequired>
                        <FormLabel>{translations.email[language]}</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={
                                translations.placeholder.email[language]
                            }
                            bg="white"
                        />
                    </FormControl>

                    <FormControl id="tipeBisnis" isRequired>
                        <FormLabel>
                            {translations.tipeBisnis[language]}
                        </FormLabel>
                        <Select
                            name="tipeBisnis"
                            value={formData.tipeBisnis}
                            onChange={handleChange}
                            placeholder={
                                language === "ID"
                                    ? "Pilih tipe bisnis"
                                    : language === "EN"
                                    ? "Select business type"
                                    : "选择业务类型"
                            }
                            bg="white"
                        >
                            <option value="B2B">
                                {translations.options.B2B[language]}
                            </option>
                            <option value="B2C">
                                {translations.options.B2C[language]}
                            </option>
                            <option value="Non-profit">
                                {translations.options.nonProfit[language]}
                            </option>
                            <option value="Lainnya">
                                {translations.options.lainnya[language]}
                            </option>
                        </Select>
                    </FormControl>

                    <FormControl id="pesan">
                        <FormLabel>{translations.pesan[language]}</FormLabel>
                        <Textarea
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder={
                                translations.placeholder.pesan[language]
                            }
                            bg="white"
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        colorScheme="green"
                        rounded={"full"}
                        mr={"auto"}
                        px={"40px"}
                    >
                        {translations.submit[language]}
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default Form;
