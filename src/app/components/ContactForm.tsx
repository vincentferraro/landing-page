// components/ContactForm.tsx
"use client";

import { Box, Button, Grid, TextField, Typography, Divider } from "@mui/material";
import { useContactForm } from "../hooks/UseContactForm";

const ContactForm = () => {
  const { formik, submitAttempted, setSubmitAttempted } = useContactForm();

  return (
    <Box component="section" sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/equipe.jpg"
            alt="Nous contacter"
            sx={{ width: "100%", height: "auto", borderRadius: 2 }}
          />
        </Grid>

        <Grid item xs={12} md={1}>
          <Divider orientation="vertical" sx={{ height: "100%", borderColor: "#ccc" }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Contactez-nous</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nom"
                  name="nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Prénom"
                  name="prenom"
                  value={formik.values.prenom}
                  onChange={formik.handleChange}
                  error={formik.touched.prenom && Boolean(formik.errors.prenom)}
                  helperText={formik.touched.prenom && formik.errors.prenom}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Adresse email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Logos partenaires */}
          <Box mt={4} display="flex" justifyContent="center" gap={4} flexWrap="wrap">
            <Box component="img" src="/logo1.jpg" alt="Partenaire 1" sx={{ width: 100 }} />
            <Box component="img" src="/logo2.jpg" alt="Partenaire 2" sx={{ width: 100 }} />
            <Box component="img" src="/logo3.jpg" alt="Partenaire 3" sx={{ width: 100 }} />
            <Box component="img" src="/logo4.jpg" alt="Partenaire 4" sx={{ width: 100 }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
