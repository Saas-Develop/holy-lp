import React, { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    // Adiciona o script do gtag.js ao documento
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16628924935";
    script.async = true;
    document.head.appendChild(script);

    // Adiciona a configuração do gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16628924935');
    };

    // Remove o script quando o componente é desmontado
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
