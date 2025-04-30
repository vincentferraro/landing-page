// /components/Hero.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Grid, GlobalStyles} from '@mui/material';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);   // contrôle l'opacité
  
  useEffect(() => {
    let timeoutId : NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        timeoutId = setTimeout(()=>setIsVisible(false),300);  // d'abord opacité 0
      } else {
        // setTimeout(() => setIsVisible(true), 10);  // remet l'opacité à 1 (petit délai pour éviter un bug)
        clearTimeout(timeoutId)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {/* On injecte l'animation globalement */}
    <GlobalStyles
        styles={{
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-10px)',
            },
          },
        }}
      />

    <Box
      sx={{
        backgroundImage: 'url(/presentation.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '95vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '50px',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        position: 'relative', 
      }}
    >
      <Grid container>
        <Grid container size={{xs:12}}>
          <Box>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              Nom de l'entreprise
            </Typography>
            <Typography variant="h4" sx={{ marginTop: '10px' }}>
                Votre expert du chauffage depuis 20 ans
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Flèche vers le bas */}
      {isVisible && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            animation: 'bounce 1s infinite', 
            opacity: isVisible ? 1 : 0,     
            transition: 'opacity 1s ease', 
            pointerEvents: isVisible ? 'auto' : 'none',
          }}
        >
          {/* Cercle autour de la flèche */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50px', // Taille du cercle
              height: '50px', // Taille du cercle
              borderRadius: '50%', // Forme circulaire
              backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur de fond (blanc transparent)
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Ombre légère autour du cercle
            }}
          >
            <IconButton
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              sx={{ color: 'white' }}
            >
              <ArrowDownwardIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
    </>
    
  );
};

export default Hero;
