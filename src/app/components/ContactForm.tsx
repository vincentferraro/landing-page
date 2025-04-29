// components/ContactForm.tsx
"use client";

import { Box, Button, Grid, TextField, Typography, Divider } from "@mui/material";
import { useContactForm } from "../hooks/UseContactForm";

const ContactForm = () => {
  const { formik, submitAttempted, setSubmitAttempted } = useContactForm();

  return (
    <Box component="section" sx={{ p: 4, backgroundColor: "#f5f5f5"}} display='flex' justifyContent='center' >
        <Grid container display='flex' flexDirection='row'>
        <Grid container display='flex' flexDirection='column' size={{xs:5, md:5}} spacing={2} alignItems="center">
          <Typography variant="h5" gutterBottom>Nos partenaires </Typography>
            <Grid container size={{ xs:12, sm:12}} mt={4} display="flex" flexDirection='row' justifyContent="center" spacing={4} flexWrap="wrap">
                  <Grid size={{xs:6, sm:6}} component="img" src="partenaires/logo1.jpg" alt="Partenaire 1" sx={{ width: 100 }} />
                  <Grid size={{xs:6, sm:6}} component="img" src="partenaires/logo1.jpg" alt="Partenaire 2" sx={{ width: 100 }} />
                  <Grid size={{xs:6, sm:6}} component="img" src="partenaires/logo1.jpg" alt="Partenaire 3" sx={{ width: 100 }} />
                  <Grid size={{xs:6, sm:6}} component="img" src="partenaires/logo1.jpg" alt="Partenaire 4" sx={{ width: 100 }} />
                </Grid>
        </Grid>
        <Grid container size={{ xs:1, md:1}} display='flex' justifyContent='center'>
          <Divider orientation="vertical" sx={{ height: "100%", borderColor: "#000000" }} />
        </Grid>

        <Grid container size={{xs:5, md:5}} display='flex' flexDirection='column' justifyContent='center'>
          <Typography variant="h5" gutterBottom>Contactez-nous</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid container size={{xs:12, sm:6}}>
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
              <Grid container size={{xs:12, sm:6}}>
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
              <Grid container size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Numéro de téléphone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid container size={{xs:12}}>
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
              <Grid container size={{xs:12}}>
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
              <Grid container size={{xs:12}}>
                <Button type="submit" variant="contained" fullWidth>
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </form>
          
        </Grid>
        </Grid>
    </Box>
  );
};

export default ContactForm;
