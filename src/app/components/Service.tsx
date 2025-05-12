import ContactForm from "@/app/components/ContactForm";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

export type ServiceData = {
  title: string
  description :string
  services : [
      service:{
          title: string
          description: string
          image: string
          alt: string
      }
  ]
}

export default function Service({data} : { data : ServiceData}) {
    return (
      <Box component="main" display="flex" flexDirection="column" sx={{ pt: 18 }} style={{
        backgroundColor:'#FFFFFF'
        }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="body1" align="center" mb={6} color="text.secondary">
            {data.description}
          </Typography>
  
          {data.services.map((service, index) => (
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
  