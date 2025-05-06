import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Chauff`&apos;`Express – Chauffage & Sanitaire</title>
        <meta name="description" content="Spécialistes en installation de chauffage, dépannage et sanitaires. Interventions rapides et de qualité." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.monsite.fr/" />
      </Head>
      <body>
            <Header/>
            {children}
            <Footer/>
      </body>
    </html>
  );
}
