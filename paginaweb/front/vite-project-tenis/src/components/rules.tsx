import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { reglas } from '../data/rules';

export default function Reglas() {
  const [reglaAbierta, setReglaAbierta] = useState<number | null>(null);

  const mostrarRegla = (id: number) => {
    setReglaAbierta(reglaAbierta === id ? null : id);
  };

  return (
    <Box sx={{ padding: 4 }}>

      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          color: 'text.primary',
          fontWeight: 'bold'
        }}
      >
        🎾 Reglas del tenis
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3
        }}
      >

        {reglas.map((regla) => (
          <Card
            key={regla.id}
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: '0.3s',

              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}
          >

            <CardContent>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                  marginBottom: 2
                }}
              >
                {regla.titulo}
              </Typography>

              {reglaAbierta === regla.id && (
                <Typography
                  variant="body2"
                  sx={{ marginBottom: 2 }}
                >
                  {regla.descripcion}
                </Typography>
              )}

              <Button
                variant="contained"
                onClick={() => mostrarRegla(regla.id)}
                sx={{
                  backgroundColor: '#2d6a4f',
                  '&:hover': {
                    backgroundColor: '#1b4332'
                  }
                }}
              >
                {reglaAbierta === regla.id ? 'Ver menos' : 'Ver más'}
              </Button>

            </CardContent>

          </Card>
        ))}

      </Box>
    </Box>
  );
}
