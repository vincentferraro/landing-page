"use client";

import { Container, Typography, Box, List, ListItem } from "@mui/material";

export default function PolitiqueConfidentialite() {
  return (
    <Container sx={{ pt: 18, pb: 6 }}>
      <Typography variant="h3" gutterBottom>
        Politique de confidentialité
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Collecte des données personnelles
        </Typography>
        <Typography>
          Nous collectons des informations personnelles uniquement lorsque vous nous les fournissez volontairement via les formulaires de contact ou de demande de devis. Les données collectées peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone et toute autre information que vous nous communiquez.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Utilisation des données
        </Typography>
        <Typography>
          Les données personnelles sont utilisées uniquement pour :
          <List>
            <ListItem>Répondre à vos demandes de contact</ListItem>
            <ListItem>Envoyer des devis ou des informations complémentaires</ListItem>
            <ListItem>Assurer le suivi client</ListItem>
          </List>
          Nous ne vendons ni ne partageons vos données avec des tiers non autorisés.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Droit d’accès, de rectification et de suppression
        </Typography>
        <Typography>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l’adresse email suivante : contact@monsite.fr
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Sécurité des données
        </Typography>
        <Typography>
          Nous mettons en place toutes les mesures nécessaires pour assurer la sécurité de vos données personnelles et empêcher leur perte, leur altération ou leur accès non autorisé.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Modification de la politique
        </Typography>
        <Typography>
          Cette politique de confidentialité peut être modifiée à tout moment pour s’adapter à l’évolution de la législation ou de notre site. La dernière mise à jour date du [à compléter].
        </Typography>
      </Box>
    </Container>
  );
}
