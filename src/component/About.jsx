import { Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <section
      style={{
        maxWidth: "768px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          color: "text.main",
          fontSize:"h2"
        }}
      >
        About Me
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
          },
          lineHeight: 1.75,
          letterSpacing: "0.05em",
          color: "#1e1e2fbc",
          fontWeight: "300",
        }}
      >
        Passionate and motivated aspiring Software Developer with a strong
        interest in technology and continuous learning. Former Shop Manager with
        proven skills in management, problem-solving, and effective
        communication. Dedicated to building solid technical expertise to
        contribute meaningfully as a capable and reliable developer.
      </Typography>
    </section>
  );
}
