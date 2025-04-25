// app/components/CallToAction.tsx
'use client'
import { Box, Button, Typography } from '@mui/material'

export default function CallToAction() {

    const scrollToContactForm = () => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Prêt à démarrer ?
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Prenez contact avec nous dès aujourd'hui et voyons comment nous pouvons vous aider à réussir.
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={scrollToContactForm}>
        Contactez-nous
      </Button>
    </Box>
  )
}
