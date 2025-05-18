import { Box, Typography, Stack, Button, Link, Snackbar } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // สำหรับไอคอนลูกศร
import { useState } from "react";

export default function Contact() {
    const [alert , setAlert] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("tanut.ktr@gmail.com")
        setAlert(true);
    };

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Contact
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          onClick={handleCopy}
          sx={{
            borderRadius:"10px"
          }}
        >
          G-mail
        </Button>
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          href="https://github.com/Tanut-23"
          target="_blank"
          sx={{
            borderRadius:"10px"
          }}
        >
          Github
        </Button>
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          href="https://www.linkedin.com/in/tanut-ketrueang/"
          target="_blank"
          sx={{
            borderRadius:"10px"
          }}
        >
          LinkedIn
        </Button>
      </Stack>
      {/* //-----Snack Bar-----// */}
      <Snackbar
        open={alert}
        onClose={() => setAlert(false)}
        autoHideDuration={2000}
        message="Email copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
      </Snackbar>
    </Box>
 

);
}