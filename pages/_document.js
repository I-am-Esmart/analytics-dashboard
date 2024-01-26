// pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html>
    <Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')
      </style>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
