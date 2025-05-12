"use client";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import logo1 from "../../../public/partenaires/logo1.jpg";
import { useContactForm } from "../hooks/UseContactForm";

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { formik, emailSent } = useContactForm();


  return (
    <Box
      id="contact"
      component="section"
      sx={{ p: 4, backgroundColor: "#f5f5f5", height:"auto"}}

    >
      <Grid container spacing={4} >
        {/* Colonne partenaires */}
        <Grid size={{xs:12, md:6}} sx={{  height:"auto"}} display={"flex"} flexDirection="column" alignItems="center">
          <Typography variant="h5" gutterBottom align="center">
            Nos partenaires
          </Typography>
          <Grid container height="auto" padding={6} spacing={5} justifyContent="center">
            {/*  Modiifier photos des partenaires ci dessous */}
            {[1, 2, 3, 4].map((_, i) => (
              <Grid size={{ xs:6, sm:3, md:6}} key={i}>
                <Image
                  src={logo1}
                  alt="Logo partenaire"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </Grid>
            ))}
          </Grid>
          
        </Grid>

        {/* Formulaire de contact */}
        <Grid size={{xs:12, md:6}} >
          <Typography variant="h5" gutterBottom align="center">
            Contactez-nous
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs:12 , sm:6}}>
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
              <Grid  size={{ xs:12 , sm:6}}>
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
              <Grid size={{xs:12}}>
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
              <Grid size={{ xs:12}}>
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
              <Grid size={{ xs:12}}>
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
              <Grid size={{ xs:12}}>
                <Button type="submit" variant="contained" fullWidth>
                  Envoyer
                </Button>
                {emailSent && (
                  <Typography color="success.main" textAlign="center" sx={{ mt: 2 }}>
                    ✅ Votre message a bien été envoyé.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
