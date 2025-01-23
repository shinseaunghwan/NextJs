"use client";

import { useEffect, useRef } from 'react';

export default function Translate() {
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!scriptAdded.current) {
      scriptAdded.current = true;

      const script = document.createElement('script');
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.type = "text/javascript";
      script.async = true;
      document.head.appendChild(script);

      const initScript = document.createElement('script');
      initScript.innerHTML = `
        function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'ko',
            includedLanguages: 'en,ko,ja',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
          }, 'google_translate_element');
        }
      `;
      document.body.appendChild(initScript);
    }
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  );
}
