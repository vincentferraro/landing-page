import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Chauff'Express – Chauffage & Sanitaire",
  description: "Spécialistes en installation de chauffage, dépannage et sanitaires. Interventions rapides et de qualité.",
  robots: "index, follow",
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
            <Header/>
            {children}
            <Footer/>
      </body>
    </html>
  );
}
