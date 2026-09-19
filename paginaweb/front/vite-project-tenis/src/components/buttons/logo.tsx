import { Box } from "@mui/material";
import logo from "./assets/logo.png";

function App() {
  return (
    <Box>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          height: 60,
          width: "auto",
        }}
      />
    </Box>
  );
}

export default App;
