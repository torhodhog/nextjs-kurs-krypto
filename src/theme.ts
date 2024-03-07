"use client";

import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    // Dette formatet på farger heter hex color: https://www.google.com/search?q=color+picker
    // primary: {
    //   main: "#123123",
    //   light: "#333",
    // },
    // secondary: {
    //   main: "#eee",
    //   light: "#000123",
    // },
    // background: {
    //   default: "#333",
    //   paper: "#ccc",
    // },
    // text: {
    //   primary: "#fff",
    //   secondary: "#ffffff",
    // },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default theme;
