import { Card, CardContent, Stack, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { GrandSlam } from '../../types/GrandSlam';

interface SlamCardProps {
  slam: GrandSlam;
}

// Mapa de acentos por torneo, en vez de slugs + CSS
const SLAM_ACCENTS: Record<string, string> = {
  'Roland Garros': '#d9812c', // polvo de ladrillo
  'Wimbledon': '#4b7f52',     // verde césped
  'US Open': '#3b5bdb',       // azul cancha dura
  'Australian Open': '#2596be',
};

const getAccentColor = (nombre: string): string =>
  SLAM_ACCENTS[nombre] ?? SLAM_ACCENTS['Australian Open'];

// Card con borde superior dinámico según el torneo
const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: string }>(({ accent }) => ({
  borderTop: `4px solid ${accent}`,
  height: '100%',
}));

function SlamCard({ slam }: SlamCardProps) {
  const accent = getAccentColor(slam.nombre);

  return (
    <StyledCard accent={accent} variant="outlined">
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb:1 }}>
          <Typography variant="h6" component="h3">
            {slam.nombre}
          </Typography> 
          <Chip label={slam.pais} size="small" />
        </Stack>

        <Stack direction="row" spacing={1} mb={1.5} flexWrap="wrap">
          <Typography variant="body2" color="text.secondary">
            {slam.ciudad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            · {slam.superficie}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            · {slam.fecha}
          </Typography>
        </Stack>

        <Typography variant="body2">{slam.descripcion}</Typography>
      </CardContent>
    </StyledCard>
  );
}

export default SlamCard;