"use client";

import { AppBar, Toolbar, Box, Button, IconButton, useMediaQuery, useTheme, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/chauffexpress_logo.png";
;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

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


  // DRAWER TEST

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );



  return (
    <>
          {isMobile ? (
            <Box
              sx={{
              position: "fixed",
              
              zIndex: 1300,
              width: { xs: "100%", sm: "80%", md: "70%" },
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
                <IconButton edge="end" color="inherit" onClick={toggleMenu}>
                  <MenuIcon sx={{ color: textColor }} />
                </IconButton>

                {/* Box qui s'affiche en mode mobile */}
                <SwipeableDrawer sx={{ top:'60px'}}
              anchor={'bottom'}
              open={menuOpen}
              onClose={toggleDrawer('top', false)}
              onOpen={toggleDrawer('top', true)}
            >
            {list('top')}
          </SwipeableDrawer>
            </Toolbar>
            </AppBar>
            </Box>
          ) : (
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
            </Box>
          )}
     </>
  );
}

export { navItems };
