import React from "react";
import { Stack, Typography, Link } from "@mui/material";

type ResourceLink = {
  name: string;
  url: string;
};

type ResourceCategory = {
  title: string;
  links: ResourceLink[];
};

const resources: ResourceCategory[] = [
  {
    title: "Utviklingsverktøy",
    links: [
      { name: "React", url: "https://react.dev" },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Vercel", url: "https://vercel.com/" },
      { name: "VSCode", url: "https://code.visualstudio.com/" },
      { name: "Node.js", url: "https://nodejs.org/en/" },
      { name: "Material UI", url: "https://mui.com/" },
    ],
  },
  {
    title: "Kodehåndtering",
    links: [
      {
        name: "Kildekode",
        url: "https://github.com/Bergen-Tech/nextjs-kurs-krypto",
      },
      { name: "GitHub Desktop", url: "https://desktop.github.com/" },
      {
        name: "Full Versjon",
        url: "https://nextjs-kurs-krypto-full-version.vercel.app",
      },
    ],
  },
  {
    title: "Krypto Ressurser",
    links: [
      { name: "CryptoCompare", url: "https://www.cryptocompare.com/" },
      { name: "CryptoLogos", url: "https://cryptologos.cc/" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <Stack
      mt={5}
      py={3}
      textAlign="center"
      borderTop={1}
      borderColor="grey.200"
      spacing={3}
    >
      <Typography variant="subtitle1" gutterBottom>
        Nyttige Ressurser:
      </Typography>

      {resources.map((category) => (
        <div key={category.title}>
          <Typography variant="h6">{category.title}</Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mb={2}
            flexWrap="wrap"
          >
            {category.links.map((link) => (
              <Link
                key={link.name}
                color="inherit"
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </div>
      ))}
    </Stack>
  );
};

export default Footer;
