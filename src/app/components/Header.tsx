// components/Header.tsx

"use client";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Qui sommes-nous ?", href: "#a-propos" },
  { label: "Nos services", href: "#services" },
  { label: "Nous contacter", href: "#contact" },
];

const textColor = "#FFFFFF"

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#473C44"}} elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: textColor, fontWeight: "bold" }}>
          Chauffage
        </Typography>

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
      </Toolbar>
    </AppBar>
  );
}
