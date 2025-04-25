'use client'

import { Box, Grid, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', py: 6, px: 3 }}>
      <Grid container spacing={4}>
        {/* Colonne gauche : Infos */}
        <Grid container  size={{ xs:12, md:6}}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography>Adresse : 123 Rue de la Chauffe, 75000 Paris</Typography>
          <Typography>Téléphone : 01 23 45 67 89</Typography>
          <Typography>Email : contact@monsite.fr</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Horaires d'ouverture
            </Typography>
            <Typography>Lundi - Vendredi : 08h00 - 18h00</Typography>
            <Typography>Samedi : 09h00 - 13h00</Typography>
            <Typography>Dimanche : Fermé</Typography>
          </Box>
        </Grid>

        {/* Colonne droite : espace libre ou carte */}
        <Grid container  size={{xs:12,md:6}}>
               <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: '100%',
                    minHeight: '200px',
                  }}
                >
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.722097413094!2d2.352221515674361!3d48.85661407928764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06b8d0ff%3A0x40b82c3688c9460!2s10%20Rue%20de%20Rivoli%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1714048981733!5m2!1sfr!2sfr&markers=48.85661407928764,2.352221515674361"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                                
         </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
