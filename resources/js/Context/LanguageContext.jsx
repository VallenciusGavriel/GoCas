import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("ID"); // default ke indo

    useEffect(() => {
        // Cek localStorage saat pertama kali
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const updateLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang); // Simpan ke localStorage
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: updateLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
