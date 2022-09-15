import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Home(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.handleComplete();
  };

  return (
    <Container component="main" maxWidth="S">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CheckCircleIcon
          color="primary"
          sx={{ mb: 6, alignItems: "center", fontSize: 50 }}
        />
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Congratulations, Eren!
        </Typography>
        <br />
        <Typography variant="body1">
          You have completed onboarding, you can start using the Eden!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2, textTransform: "none", width: 400 }}
          >
            Launch Eden
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
