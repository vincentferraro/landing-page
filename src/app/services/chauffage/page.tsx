import ContactForm from "@/app/components/ContactForm";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

const services = [
    {
      title: "Installation de chaudière gaz",
      description:
        "Nous installons des chaudières gaz modernes, performantes et économes en énergie. Une solution idéale pour un chauffage central efficace dans votre logement.",
      image: "/services/chaudiere.jpg",
      alt:"Chaudière gaz murale installé sur un mur blanc dans l angle d une piece"
    },
    {
      title: "Installation de pompe à chaleur",
      description:
        "Profitez d’un système de chauffage écologique et économique grâce à nos pompes à chaleur air/eau ou air/air, adaptées à tous les types de logements.",
      image: "/services/pompe-a-chaleur.jpeg",
      alt:"Pompe à chaleur installé à l exterieur d'une maison sur un mur en brique"
    },
    {
      title: "Installation de chauffage à pellets",
      description:
        "Nos installations de poêles et chaudières à pellets vous offrent une solution de chauffage respectueuse de l’environnement et économique à l’usage.",
      image: "/services/pellets.jpg",
      alt:"Poêle à pellet noir installé dans l'angle d une pièce"
    },
    {
      title: "Installation de plancher chauffant",
      description:
        "Pour un confort thermique optimal et une chaleur homogène, le plancher chauffant est une solution invisible et moderne que nous installons avec précision.",
      image: "/services/plancher-chauffant.jpg",
      alt:'Tuyaux de plancher chauffant installés au sol'
    },
    {
      title: "Installation de radiateurs",
      description:
        "Nous installons une large gamme de radiateurs (électriques, à eau, design ou standards) adaptés à vos besoins en termes de style, de puissance et d’efficacité.",
      image: "/services/radiateur.jpg",
      alt:"Radiateur intallé sur un mur blanc"
    },
  ];

export default function InstallationPage() {
  return (
    <Box component="main" display="flex" flexDirection="column" sx={{ pt: 18 }} style={{
      backgroundColor:'#F5F5F5'
      }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Nos services d’installation de chauffage
        </Typography>
        <Typography variant="body1" align="center" mb={6} color="text.secondary">
          Découvrez nos solutions professionnelles pour un confort thermique optimal, adaptées à chaque habitation.
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
