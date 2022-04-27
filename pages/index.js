import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../components/ProTip";
import ActiveLink from "../components/ActiveLink";
import MuiLink from "@mui/material/Link";
import Link from "../components/Link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Tndev Art</title>
        <meta
          name="google-site-verification"
          content="oWPG0Wtv_qIrPDPKZNXlIHgtAD7TnKYAE_ptUSEwP2o"
        />
        <meta charSet="UTF-8" />
        <meta name="description" content="web artist for artisans" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="tunis, vente, marketplace, ecommerce, good price"
        />
        <meta name="author" content="CH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="web artist for artisans" />
        <meta property="og:description" content="market place." />
        <meta property="og:image" content="https://i.ibb.co/xzk4HFF/back.png" />
        <link rel="alternate" href="https://tndev-art.tn/ar" hrefLang="en" />
        <link rel="alternate" href="https://tndev-art.tn/fr" hrefLang="fr" />
        <link rel="alternate" href="https://tndev-art.tn/en" hrefLang="ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",

              "@type": "Person",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tunis",
                addressRegion: "TN",
                postalCode: "1001",
                streetAddress: "Tunisia",
              },
              colleague: [
                "http://www.xyz.edu/students/alicejones.html",
                "http://www.xyz.edu/students/bobsmith.html",
              ],
              email: "mailto:tndev8@gmail.com",
              image: "janedoe.jpg",
              jobTitle: "web developer",
              name: "CH",
              telephone: "(216) 553-85474",
              url: "https://tndev-art.tn",
            }),
          }}
        />
      </Head>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: "1rem" }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            tndev-art under construction
          </Typography>
          <Link href="/about" color="secondary">
            about
          </Link>
        </Box>
        <Box>
          <h1>ggg</h1>
          <ul>
            {router.locales.map((locale) => {
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                  hhhh
                </Link>
              </li>;
            })}
          </ul>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
