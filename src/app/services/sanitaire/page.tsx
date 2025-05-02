import ContactForm from "@/app/components/ContactForm";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

const services = [
  {
    title: "Installation de salle de bain",
    description:
      "Conception et aménagement complet de votre salle de bain : plomberie, équipements sanitaires, revêtements, pour un espace moderne et fonctionnel.",
    image: "/services/salle-de-bain.png",
    alt:"salle de bain moderne grise et noir"
  },
  {
    title: "Remplacement de robinetterie",
    description:
      "Nous remplaçons vos anciens robinets par des modèles modernes et économiques, qu’il s’agisse de mitigeurs ou de thermostatiques.",
    image: "/services/robinetterie.jpg",
    alt:"lavabo rond et robinetterie moderne"
  },
  {
    title: "Pose de douche à l’italienne",
    description:
      "Installation sur mesure de douches à l’italienne, élégantes et accessibles, avec étanchéité parfaite et écoulement discret.",
    image: "/services/douche-italienne.jpg",
    alt:"Deux douches à l italienne"
  },
  {
    title: "Installation de WC suspendu",
    description:
      "Installation de WC suspendus pour une salle de bain épurée et facile d’entretien, avec bâti-support encastré.",
    image: "/services/wc-suspendu.jpg",
    alt:"Wc suspendu sur mur couleur ashy blue"
  },
  {
    title: "Installation de douche PMR",
    description:
      "Nous réalisons l’installation de douches adaptées aux personnes à mobilité réduite : accessibles, sécurisées (barres de maintien, sièges intégrés) et conformes aux normes PMR.",
    image: "/services/douche-pmr.jpg",
    alt: "Douche pmr avec siege et barre de maintien"
  }
];

export default function SanitairePage() {
  return (
    <Box component="main" display="flex" flexDirection="column" sx={{ pt: 18 }} style={{
        backgroundColor:'#F5F5F5'
        }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Nos services d’installation sanitaire
        </Typography>
        <Typography variant="body1" align="center" mb={6} color="text.secondary">
          Du remplacement d’équipements à la création de votre salle de bain, nous vous offrons un service complet, professionnel et adapté à vos besoins.
        </Typography>

        {services.map((service, index) => (
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            sx={{ mb: 6 }}
            key={index}
          >
            <Grid container size={{ xs:12, md:6}}>
              <Image
                src={service.image}
                alt={service.alt}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            </Grid>
            <Grid container size={{ xs:12, md:6}}>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
      <ContactForm />
    </Box>
  );
}
