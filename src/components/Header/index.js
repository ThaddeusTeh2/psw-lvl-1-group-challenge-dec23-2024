import { Typography, Divider, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ textAlign: "center", pt: 5 }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "bold", pb: "10px" }}
      >
        Task Management System
      </Typography>
      <Divider sx={{ pt: 3, mb: 3, borderBottomWidth: 3 }}></Divider>
    </Box>
  );
}

export default Header;
