'use client'

import { Box, Typography, Grid, Paper } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const features = [
  {
    title: 'Savoir-faire',
    description: 'Nous maîtrisons les dernières technologies pour des solutions modernes et efficaces.',
    icon: <BuildIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Expérience',
    description: 'Des années de pratique et des projets variés au service de votre réussite.',
    icon: <WorkspacePremiumIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Service',
    description: 'Un accompagnement personnalisé et une écoute attentive à chaque étape.',
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
  },
]

export default function Features() {
  return (
    <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
        Nos atouts
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid container size={{ xs: 12, sm: 4}} key={index}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
