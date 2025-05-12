'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, GlobalStyles } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from "next/image"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import presentation from "../../../public/presentation.webp"
const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        timeoutId = setTimeout(() => setIsVisible(false), 300);
      } else {
        clearTimeout(timeoutId);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
          height: '95vh',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, sm: 4, md: 8 },
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          position: 'relative',
        }}
      >
        <Box style ={{
          height:'95vh',
          width:'100%',
          left:0,
          top:0,
          position:'absolute',
          zIndex:'-1',
          overflow:'hidden'
        }}>
          <Image fill style={{ objectFit:"cover"}} src={presentation} alt="Technicien travaillant sur un appareil de chauffage " />
        </Box>
        <Grid container>
          <Grid size={ {xs:12}}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                }}
              >
                Chauff&apos;Express
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                Votre expert du chauffage depuis 20 ans
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {isVisible && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 1s infinite',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease',
              pointerEvents: isVisible ? 'auto' : 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              <IconButton
                onClick={() =>
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
                }
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
