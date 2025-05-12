'use client'

import { Box, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'
import { navItems } from './Header' // liens Header

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
              <IconButton href="https://facebook.com" target="_blank" rel="noopener" sx={{ color: 'white' }} aria-label="facebook">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: 'white' }} aria-label="twitter">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: 'white' }} aria-label="instagram">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" rel="noopener" sx={{ color: 'white' }} aria-label="linkedin">
                <LinkedIn />
              </IconButton>
            {/* </Box> */}
          </Box>
        </Grid>

        {/* Colonne droite : Plan du site */}
        <Grid container size={{xs:12, md:6}} display='flex' justifyContent='center'>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', gap: 1 }}>

            { navItems.map((item,key)=>{
              return(
                <MuiLink key={key} component={Link} href={item.href} underline="hover" color="inherit">
                {item.label}
              </MuiLink>
              )
            })}
            
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
        <MuiLink component={Link} href="/confidentialite" underline="hover" color="inherit">
          Politique de confidentialité
        </MuiLink>
      </Box>
    </Box>
  )
}
