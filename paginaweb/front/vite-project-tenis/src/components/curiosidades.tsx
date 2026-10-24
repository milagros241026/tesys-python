import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { curiosidades } from '../data/curiosidades';

export default function Curiosidades() {
  const [indice, setIndice] = useState(0);

  const mostrarOtra = () => {
    setIndice((anterior) => (anterior + 1) % curiosidades.length);
  };

  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>

      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          color: '#1b4332',
          fontWeight: 'bold'
        }}
      >
        🎾 Datos curiosos del tenis
      </Typography>

      <Card
        sx={{
          maxWidth: 500,
          margin: 'auto',
          borderRadius: 3,
          boxShadow: 3,
          padding: 2
        }}
      >
        <CardContent>

          <Typography
            variant="h6"
            sx={{
              color: '#2d6a4f',
              fontWeight: 'bold',
              marginBottom: 2
            }}
          >
            {curiosidades[indice].titulo}
          </Typography>

          <Typography>
            {curiosidades[indice].descripcion}
          </Typography>

        </CardContent>
      </Card>

      <Button
        variant="contained"
        onClick={mostrarOtra}
        sx={{
          marginTop: 3,
          backgroundColor: '#2d6a4f',
          '&:hover': {
            backgroundColor: '#1b4332'
          }
        }}
      >
        🎾 Mostrar otra curiosidad
      </Button>

    </Box>
  );
}
