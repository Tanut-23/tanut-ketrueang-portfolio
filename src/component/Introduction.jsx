import { Typography } from "@mui/material";

export default function Introduction(){


return (
<section>
    <Typography color="text.main" fontSize="h1" fontWeight={600} sx={{
        letterSpacing: '0.05em'
    }}>Tanut Ketrueang</Typography>
    <Typography color="text.secondary" sx={{
        letterSpacing: '0.1em'
    }}>Full Stack Developer | Backend Developer | QA Tester</Typography>
</section>

)
}