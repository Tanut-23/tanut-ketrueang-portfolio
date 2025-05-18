import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Image } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  maxWidth: 400,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Project() {
  const [showCard, setShowCard] = useState(false);
  function openCard() {
    setShowCard(true);
  }
  return (
    <div>
      <Typography
        sx={{
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#333",
          fontSize: "h2",
        }}
      >
        Project
      </Typography>
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
        <Item onClick={openCard} sx={{ my: 1, width: "100%", p: 2 }}>
          <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
            <Avatar src="https://res.cloudinary.com/dnkaoicoo/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1747275164/u1qjduxtlkxl1e9bl4tw.png"></Avatar>
            <Typography noWrap>COLLECTICO : E-commerce website</Typography>
          </Stack>
        </Item>
      </Box>

      <Dialog
        open={showCard}
        onClose={() => setShowCard(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle fontWeight={600}>
          Collectico: E-commerce Website
          <Typography fontSize={15} color="text.secondary" fontStyle="italic">
            Role : Product Owner , Full Stack Developer
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <img src="https://res.cloudinary.com/dnkaoicoo/image/upload/v1747505923/edm8uc3qrtc5astwlydu.png" />
          <Typography paragraph>
            A MERN-stack e-commerce platform for buying and selling art. This
            project includes features like authentication login/logout, product
            listings, image uploads by cloudinary, visual museum,and real-time
            auction using WebSocket.
          </Typography>
          <Typography variant="body2" color="text.secondary" fontStyle="italic">
            Tech Stack: React, Tailwinds, Material UI, Node.js, Express,
            MongoDB, WebSocket
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCard(false)} variant="outlined">
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://dragon-tempura-sprint2.vercel.app/"
            target="_blank"
          >
            Visit Site
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
