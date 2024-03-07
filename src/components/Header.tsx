import React from "react";
import { AppBar, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Her kan du sette inn et ikon for eksempel, https://mui.com/material-ui/material-icons/*/}
            <Typography variant="h6" noWrap>
              Mitt Krypto Dashboard
            </Typography>
            
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
