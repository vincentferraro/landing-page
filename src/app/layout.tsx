import "./globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import Header from "./components/Header";

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
      </body>
    </html>
  );
}
