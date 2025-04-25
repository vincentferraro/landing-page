// /components/Hero.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Grid } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);

  // Fonction pour vérifier le scroll et cacher la flèche
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Si l'utilisateur a défilé de 50px
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  useEffect(() => {
    // Ajout de l'événement de scroll lors du montage
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement au démontage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
              Services proposés : Dépannage, Installation, Remplacement
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Flèche vers le bas */}
      {showArrow && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            animation: 'bounce 1s infinite', // Animation pour l'effet de rebond
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
  );
};

export default Hero;
