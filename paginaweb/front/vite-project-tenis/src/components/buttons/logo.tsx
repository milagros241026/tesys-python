import { Box } from "@mui/material";
import logo from "../../assets/AOlogo.png";

export default function Logo() {
  return (
    <Box>
      <Box
        component="img"
        src={logo}
        alt="Australian Open"
        sx={{
          height: 60,
          width: "auto",
        }}
      />
    </Box>
  );
}
