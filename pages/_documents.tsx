import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="portfolio"
            content="Front end developer looking for a job"
          />
          <meta
            name="keywords"
            content="Frontend developer, mobile developer"
          />
        </Head>
        <body className="text-white bg-fixed bg-gradient-to-r from-darkblue to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
