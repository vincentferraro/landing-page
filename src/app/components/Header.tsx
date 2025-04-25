// app/components/Header.tsx

import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          MonSite
        </Typography>
        <Box>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">À propos</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
