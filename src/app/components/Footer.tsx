'use client'

import { Box, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', py: 6, px: 3 }}>
      {/* Colonne principale */}
      <Grid container spacing={4}>
        {/* Colonne gauche : Infos + Réseaux sociaux */}
        <Grid container size={{xs:12, md:6}} display='flex' flexDirection='column' alignItems='center' justifyContent='center' spacing={1}>
          {/* <Typography variant="h6" gutterBottom>
            Contact
          </Typography> */}
          <Typography>123 Rue de la Chauffe, 75000 Paris</Typography>
          <Typography> 01 23 45 67 89</Typography>
          <Typography>contact@monsite.fr</Typography>

          {/* <Box sx={{ mt: 2 }} display='flex' flexDirection='column'> */}
          
            <Box mt={2}>
              <IconButton href="https://facebook.com" target="_blank" rel="noopener" sx={{ color: 'white' }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: 'white' }}>
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" rel="noopener" sx={{ color: 'white' }}>
                <LinkedIn />
              </IconButton>
            {/* </Box> */}
          </Box>
        </Grid>

        {/* Colonne droite : Plan du site */}
        <Grid container size={{xs:12, md:6}} display='flex' justifyContent='center'>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <MuiLink component={Link} href="/" underline="hover" color="inherit">
              Accueil
            </MuiLink>
            <MuiLink component={Link} href="/#qui-sommes-nous" underline="hover" color="inherit">
              Qui sommes-nous
            </MuiLink>
            <MuiLink component={Link} href="/#nos-atouts" underline="hover" color="inherit">
              Nos atouts
            </MuiLink>
            <MuiLink component={Link} href="/#services" underline="hover" color="inherit">
              Nos services
            </MuiLink>
            <MuiLink component={Link} href="/#contact" underline="hover" color="inherit">
              Contact
            </MuiLink>
          </Box>
        </Grid>
      </Grid>

      {/* Lien mentions en bas */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          mt: 4,
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        <MuiLink component={Link} href="/mentions-legales" underline="hover" color="inherit">
          Mentions légales
        </MuiLink>
        <MuiLink component={Link} href="/cookies" underline="hover" color="inherit">
          Cookies
        </MuiLink>
        <MuiLink component={Link} href="/rgpd" underline="hover" color="inherit">
          RGPD
        </MuiLink>
      </Box>
    </Box>
  )
}
