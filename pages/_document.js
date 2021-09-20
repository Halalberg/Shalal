// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="../../images/solros.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.shallowcrafts.com/">
<meta property="og:title" content="Shallow Crafts | Webshop">
<meta property="og:description" content="Kreativitet för dig och ditt hem">
<meta property="og:image" content="../../images/solros.png">


<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.shallowcrafts.com/">
<meta property="twitter:title" content="Shallow Crafts | Webshop">
<meta property="twitter:description" content="Kreativitet för dig och ditt hem">
<meta property="twitter:image" content="../../images/solros.png">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
