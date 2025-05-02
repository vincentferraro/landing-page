"use client";

import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/chauffexpress_logo.png"

const headerColor="rgba(71, 60, 68, 0.9)"; // Keep this headerColor



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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
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
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: textColor }} />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.href} component="a" href={item.href}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
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

export {
  navItems
}
