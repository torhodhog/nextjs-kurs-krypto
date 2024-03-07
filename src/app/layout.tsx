import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "src/components/Header";
import { TurnOffDefaultPropsWarning } from "src/helpers/TurnOffDefaultPropsWarning";
import theme from "src/theme";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <title>Bergen Tech - Next.js Kurs</title>
      </head>
      <body>
        <TurnOffDefaultPropsWarning />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
