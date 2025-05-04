// app/components/ServicesGallery.tsx
'use client'

import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from "next/image";


const services = [
    {
        title: 'Chauffage',
        image: '/services/installation.png',
        link:"/services/chauffage"
      },
  {
    title: 'Sanitaire',
    image: '/services/sanitaire.avif',
    link:"/services/sanitaire"
  },
  {
    title: 'Dépannage',
    image: '/services/remplacement.png',
    link:"/services/depannage"
  },
]

export default function ServicesGallery() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: '#fafafa', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Nos services
      </Typography>
      <Typography variant="h6" color="text.secondary" >
        Découvrez les prestations que nous proposons.
      </Typography>

      <Grid
          container
          spacing={4}
          justifyContent="space-around"
          sx={{ mt: 6 }}
        >
  {services.map((service, index) => (
    <Grid
      key={index}
      size={{ xs:12, sm:6, md:4}}
      sx={{ display: 'flex', justifyContent: 'center', padding:2}}
    >
      <Link href={service.link} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            width: 390,
            height: 450,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: 4,
            cursor: 'pointer',
            '&:hover .service-img': {
              transform: 'scale(1.05)',
              filter: 'brightness(0.7)',
            },
            '&:hover .overlay': {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
          }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="service-img"
            style={{
              objectFit: 'cover',
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
              fontSize: '1.4rem',
              textAlign: 'center',
              textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
              transition: 'background-color 0.3s ease',
              backgroundColor: 'transparent',
              px: 2,
            }}
          >
            {service.title}
          </Box>
        </Box>
      </Link>
    </Grid>
  ))}
</Grid>

    </Box>
  )
}
