// app/mentions-legales/page.tsx

"use client";

import { Container, Typography, Box } from "@mui/material";

export default function MentionsLegales() {
  return (
    <Container sx={{ py: 6, pt:18 }}>
      <Typography variant="h3" gutterBottom>
        Mentions légales
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Éditeur du site
        </Typography>
        <Typography>
          Raison sociale : [Nom de votre entreprise ou votre nom propre]<br />
          Adresse : [Adresse postale complète]<br />
          Téléphone : [Numéro de téléphone]<br />
          E-mail : [Adresse e-mail de contact]<br />
          SIRET : [Numéro SIRET]<br />
          Responsable de la publication : [Nom du responsable]
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Hébergement
        </Typography>
        <Typography>
          Nom de l’hébergeur : [Nom de l’hébergeur, ex : OVH, Infomaniak, etc.]<br />
          Adresse : [Adresse de l’hébergeur]<br />
          Téléphone : [Numéro de téléphone de l’hébergeur]
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Propriété intellectuelle
        </Typography>
        <Typography>
          L’ensemble des contenus (textes, images, logos, etc.) présents sur ce site sont la propriété exclusive de [Nom de l’entreprise ou de la personne], sauf mentions contraires. Toute reproduction, distribution, modification ou utilisation, totale ou partielle, sans autorisation préalable est interdite.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Limitation de responsabilité
        </Typography>
        <Typography>
          Ce site est mis à jour régulièrement pour garantir des informations fiables. Toutefois, des erreurs ou omissions peuvent survenir. L’éditeur ne saurait être tenu responsable des éventuels dommages liés à la consultation du site ou à l’usage de son contenu.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Loi applicable
        </Typography>
        <Typography>
          Le présent site est soumis au droit français. En cas de litige, et en l’absence de résolution amiable, les tribunaux français seront seuls compétents.
        </Typography>
      </Box>
    </Container>
  );
}
