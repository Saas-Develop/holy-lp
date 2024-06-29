'use client'

import React, { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // Adiciona o script do gtag.js ao documento
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16628924935";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    // Adiciona a configuração do gtag
    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16628924935');
    };

    // Adiciona o Meta Pixel ao documento
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "793022042614450"); // Substitua pelo seu Pixel ID
    fbq("track", "PageView");

    // Adiciona a tag de imagem de fallback do Meta Pixel
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = "1";
    img.width = "1";
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=793022042614450&ev=PageView&noscript=1";
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Remove os scripts quando o componente é desmontado
    return () => {
      document.head.removeChild(gtagScript);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default Analytics;
