import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 TaskMaster | Educational Purposes Only
      </Typography>
    </Box>
  );
};

export default Footer;
