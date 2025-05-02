// components/AboutSection.tsx

"use client";

import { Box, Grid, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box 
    id="a-propos"
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
        backgroundColor: "#f5f5f5",
        scrollMarginTop: '100px',
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        Qui sommes-nous ?
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Image à gauche */}
        <Grid container size={{ xs:12, md:6}} >
          <Box
            component="img"
            src="/equipe.jpg"
            alt="Equipe de 3 personnes, 2 hommes et 1 femme bras croisé habillé professionnellement"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Texte à droite */}
        <Grid container size={{ xs:12, md:6}}>
          <Typography variant="h6" gutterBottom>
            Une équipe de professionnels à votre service
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Depuis plusieurs années, notre entreprise met son expertise au
            service des particuliers et des professionnels. Spécialisés dans le
            domaine du chauffage, de l'installation et du dépannage, nous
            mettons un point d'honneur à offrir des prestations de qualité,
            fiables et adaptées à vos besoins.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
