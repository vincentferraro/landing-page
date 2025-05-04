"use client";

import { AppBar, Toolbar, Typography, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/chauffexpress_logo.png";

const headerColor = "rgba(71, 60, 68, 0.9)"; // Keep this headerColor

const navItems = [
  { label: "Accueil", href: "/", type: "anchor" },
  { label: "Chauffage", href: "/services/chauffage", type: "page" },
  { label: "Sanitaire", href: "/services/sanitaire", type: "page" },
  { label: "Dépannage", href: "/services/depannage", type: "page" },
  { label: "Nous contacter", href: "#contact", type: "anchor" },
];

const textColor = "#000000";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1300,
        width: { xs: "90%", sm: "80%", md: "70%" },
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 4,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#F5F5F5', backdropFilter: "blur(8px)" }} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Image
            src={Logo}
            alt="Logo chauff express avec radiateur et flamme au dessus du texte"
            width={50}
            height={50}
          />

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleMenu}>
                <MenuIcon sx={{ color: textColor }} />
              </IconButton>

              {/* Box qui s'affiche en mode mobile */}
              <Box
                sx={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100vh", // Hauteur pleine
                  backgroundColor: "rgba(71, 60, 68, 0.9)", // Fond semi-transparent
                  display: menuOpen ? "block" : "none", // Affiche/Cache le menu selon l'état
                  transition: "all 0.3s ease-in-out",
                  zIndex: 1300,
                  // display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    href={item.href}
                    sx={{
                      color: "white",
                      mx: 1,
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "1.2rem",
                      my: 2,
                    }}
                    onClick={toggleMenu} // Ferme le menu quand un item est cliqué
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  sx={{
                    color: textColor,
                    mx: 1,
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { navItems };
