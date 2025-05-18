import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function TechnicalSkill() {
  return (
    <Box>
      <Typography
        sx={{
            fontWeight: 600,
            marginBottom: "1rem",
            color: "text.main",
            fontSize:"h2"
          }}
      >
        Technical Skill
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography sx={{
            lineHeight: 1.75,
          fontWeight: 600,
          color: "text.main",
          fontSize:"h3"
        }}>FrontEnd :</Typography>
        <Typography  sx={{
          fontSize: "1rem",
          lineHeight: 1.75,
          letterSpacing: "0.05em",
          color: "#1e1e2fbc",
          fontWeight: "200",
        }}>HTML, CSS/Tailwind, JavaScript, React, Material UI, </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography sx={{
            lineHeight: 1.75,
          fontWeight: 600,
          color: "text.main",
          fontSize:"h3"
        }}>BackEnd :</Typography>
        <Typography sx={{
          fontSize: "1rem",
          lineHeight: 1.75,
          letterSpacing: "0.05em",
          color: "#1e1e2fbc",
          fontWeight: "200",
        }}>Node.js, Express.js, WebSocket</Typography>
      </Stack>
      </Box>
    </Box>
  );
}
