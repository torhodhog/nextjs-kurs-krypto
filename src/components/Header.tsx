import * as React from "react";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { QueryStats } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            <QueryStats />
            <Typography variant="h6" noWrap>
              <Typography component="span" variant="h6" color="#4f46e5">
                Bergen Tech
              </Typography>{" "}
              Next.js Krypto Kurs
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
