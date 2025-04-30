// app/components/ServicesGallery.tsx
'use client'

import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from "next/image";

const services = [
    {
        title: 'Installation',
        image: '/services/installation.png',
        link:"/services/installation"
      },
  {
    title: 'Dépannage',
    image: '/services/depannage.png',
    link:""
  },
  {
    title: 'Remplacement',
    image: '/services/remplacement.png',
    link:""
  },
]

export default function ServicesGallery() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: '#fafafa', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Nos services
      </Typography>
      <Typography variant="h6" color="text.secondary" >
        Découvrez les prestations que nous proposons dans le domaine du chauffage.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid container key={index} size={{ xs:12, sm:6, md:4}}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: 3,
                cursor: 'pointer',
                '&:hover .service-img': {
                  transform: 'scale(1.05)',
                  filter: 'brightness(0.6)',
                },
                '&:hover .overlay': {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                },
              }}
            >
            <Link href={service.link}>
              <Image
                src={service.image}
                alt={service.title}
                className="service-img"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: 'transparent',
                }}
              >
                {service.title}
              </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
