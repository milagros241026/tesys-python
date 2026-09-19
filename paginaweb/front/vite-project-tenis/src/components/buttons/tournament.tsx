import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { tournaments } from  //como llamo a carpeta info//


function torneo() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Tipos de Torneo
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {tournaments.map((torneo) => (
          <Card
            key={torneo.nombre}
            sx={{
              width: 280,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={torneo.imagen}
              alt={torneo.nombre}
            />

            <CardContent>
              <Typography variant="h6">
                {torneo.nombre}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {torneo.descripcion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Torneos;
