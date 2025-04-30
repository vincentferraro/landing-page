import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

const services = [
    {
      title: "Réparation de chaudière",
      description:
        "Nos techniciens interviennent rapidement pour diagnostiquer et réparer tous types de chaudières (gaz, fioul, à condensation), assurant sécurité et performance.",
      image: "/services/chaudiere-reparation.jpg",
    },
    {
      title: "Débouchage de canalisation",
      description:
        "Grâce à des équipements professionnels (caméras, furet électrique), nous débouchons efficacement vos canalisations, même en cas de bouchon profond ou récurrent.",
      image: "/services/debouchage.jpg",
    },
    {
      title: "Réparation de fuites",
      description:
        "Fuites visibles ou encastrées ? Nous intervenons avec précision pour localiser et réparer vos fuites d’eau sans dégâts inutiles.",
      image: "/services/fuite.jpg",
    },
    {
      title: "Réparation de chauffe-eau",
      description:
        "Panne, absence d’eau chaude ou problème de thermostat : nous réparons votre chauffe-eau électrique ou gaz rapidement, avec ou sans remplacement de pièces.",
      image: "/services/chauffe-eau-reparation.webp",
    },
  ];

export default function DepannagePage() {
  return (
    <Box component="main" display="flex" flexDirection="column" sx={{ pt: 10 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Nos services de dépannage
        </Typography>
        <Typography variant="body1" align="center" mb={6} color="text.secondary">
          Une urgence ? Notre équipe de professionnels intervient rapidement pour résoudre vos problèmes les plus techniques.
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
                alt={service.title}
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
      <Footer />
    </Box>
  );
}
