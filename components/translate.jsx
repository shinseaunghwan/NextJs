"use client";

import Script from "next/script";
import React, { useEffect, useState } from "react";
import ui from "../styles/ui.module.css"

const languages = [
    { label: "영어", value: "en", src: "https://flagcdn.com/h60/us.png" },
    { label: "한국어", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
    { label: "일본어", value: "ja", src: "https://flagcdn.com/h60/ja.png" },
];


function googleTranslateElementInit() {
    new window.google.translate.TranslateElement({
        pageLanguage: "auto",
        includedLanguages: languages.map(lang => lang.value).join(","),
    }, "google_translate_element");
}

export default function GoogleTranslate({ prefLangCookie }) {
    const [langCookie, setLangCookie] = useState(decodeURIComponent(prefLangCookie));

    useEffect(() => {
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    const onChange = (value) => {
        const lang = `/en/${value}`;
        setLangCookie(lang);
        const element = document.querySelector(".goog-te-combo");
        element.value = value;
        element.dispatchEvent(new Event("change"));
    };

    return (
        <>
            <div id="google_translate_element" style={{ display: "none", visibility: "hidden", width: "1px", height: "1px" }}></div>
            <LanguageSelector onChange={onChange} value={langCookie} />
            <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        </>
    );
}

function LanguageSelector({ onChange, value }) {
    const selectedLang = value.split("/")[2];
    return (
        <select className={ui.translateSelect} onChange={(e) => onChange(e.target.value)} value={selectedLang}>
            {languages.map((lang) => (
                <option value={lang.value} key={lang.value}>{lang.label}</option>
            ))}
        </select>
    );
}
