// app/components/ContactForm.tsx
import { Box, TextField, Button, Typography } from '@mui/material'

export default function ContactForm() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        borderRadius: 2,
      }}
      id="contact-form"
    >
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Contactez-nous
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Nous serions ravis de discuter de votre projet. Remplissez le formulaire ci-dessous.
      </Typography>
      
      <form id="contact-form">
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth size="large" sx={{ mt: 2 }}>
          Envoyer
        </Button>
      </form>
    </Box>
  )
}
