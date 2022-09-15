import * as React from "react";
import Button from "@mui/material/Button";

import ButtonBase from "@mui/material/ButtonBase";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonIcon from "@mui/icons-material/Person";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import GroupsIcon from "@mui/icons-material/Groups";
import { CardActionArea } from "@mui/material";
import styles from "../../styles/Home.module.css";

export default function Planning(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.handleComplete();
  };

  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
          How are you planning to use Eden?
        </Typography>
        <br />
        <Typography variant="body1">
          We`ll streamline your setup experience accordingly.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 5, width: 400 }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ m: 2 }}>
              <Card className={styles.card} sx={{ maxWidth: 345, height: 200 }}>
                <CardContent>
                  <PersonIcon />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    For myself
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: 13, mt: 2 }}>
                    Write better.Think more clearly.Stay organized
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box sx={{ m: 2 }}>
              <Card className={styles.card} sx={{ maxWidth: 345, height: 200 }}>
                <CardContent>
                  <GroupsIcon />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    With my team
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: 13, mt: 2 }}>
                    Wikis, docs, tasks & projects, all in one place.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2, textTransform: "none" }}
          >
            Create Workspace
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
