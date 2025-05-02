"use client";

import { Container, Typography, Box, List, ListItem } from "@mui/material";

export default function Cookies() {
  return (
    <Container sx={{ pt: 18, pb: 6 }}>
      <Typography variant="h3" gutterBottom>
        Politique de cookies
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Qu’est-ce qu’un cookie ?
        </Typography>
        <Typography>
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d’un site internet. Il permet de collecter des informations relatives à votre navigation pour améliorer votre expérience utilisateur.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Utilisation des cookies sur ce site
        </Typography>
        <Typography>
          Nous utilisons différents types de cookies :
          <ul>
            <li>Cookies strictement nécessaires au fonctionnement du site</li>
            <li>Cookies de mesure d’audience (ex : Google Analytics)</li>
            <li>Cookies de personnalisation de contenu</li>
          </ul>
          Vous pouvez accepter ou refuser tout ou partie de ces cookies via le bandeau de gestion des cookies affiché à votre première visite.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Gérer ou désactiver les cookies
        </Typography>
        <Typography>
          Vous pouvez configurer votre navigateur pour refuser l’enregistrement de cookies, ou supprimer ceux déjà enregistrés :
          <List>
            <ListItem>Google Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</ListItem>
            <ListItem>Mozilla Firefox : Options &gt; Vie privée et sécurité &gt; Cookies</ListItem>
            <ListItem>Safari : Préférences &gt; Confidentialité</ListItem>
          </List>
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Durée de conservation
        </Typography>
        <Typography>
          Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre appareil.
        </Typography>
      </Box>
    </Container>
  );
}
