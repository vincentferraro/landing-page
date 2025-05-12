// components/AboutSection.tsx

"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import equipe from "../../../public/equipe.webp"

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
        <Grid size={{ xs:12, md:6}} >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden"
            }}
          >
            <Image style={{ objectFit:"cover"}} src={equipe} alt="Equipe de 3 personnes, 2 hommes et 1 femme, bras croisé habillé professionnellement" />
          </Box>

        </Grid>

        {/* Texte à droite */}
        <Grid container size={{ xs:12, md:6}}>
          <Typography variant="h6" gutterBottom>
            Une équipe de professionnels à votre service
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Depuis plusieurs années, notre entreprise met son expertise au
            service des particuliers et des professionnels. Spécialisés dans le
            domaine du chauffage, de l&apos;installation et du dépannage, nous
            mettons un point d&apos;honneur à offrir des prestations de qualité,
            fiables et adaptées à vos besoins.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
