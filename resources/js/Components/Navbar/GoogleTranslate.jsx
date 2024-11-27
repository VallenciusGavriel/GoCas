import { useEffect } from "react";

const GoogleTranslate = () => {
    useEffect(() => {
        const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "id", // Default page language
                    includedLanguages: "en,id,zh-CN", // English, Indonesian, Mandarin Sederhana
                    layout: window.google.translate.TranslateElement
                        .InlineLayout.SIMPLE,
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        if (!window.google) {
            const googleTranslateScript = document.createElement("script");
            googleTranslateScript.type = "text/javascript";
            googleTranslateScript.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(googleTranslateScript);
            googleTranslateScript.onload = googleTranslateElementInit;
        } else {
            googleTranslateElementInit();
        }

        return () => {
            const existingScript = document.querySelector(
                "script[src*='translate_a/element.js']"
            );
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
