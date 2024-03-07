"use client";

import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useChangeCurrency } from "src/hooks/useChangeCurrency";
import { currencies } from "src/crypto/currencies";

const PriceList: React.FC<{
  prices: any;
  currentCurrency: string;
}> = ({ prices, currentCurrency }) => {
  const { changeCurrency } = useChangeCurrency();

  const updateSelectedCrypto = (symbol: string) => {
    changeCurrency(symbol);
  };
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Kryptoer
      </Typography>
      <List>
        {currencies.map(({ symbol, name, icon }) => {
          const selected = currentCurrency === symbol;
          return (
            <ListItemButton
              key={symbol}
              onClick={() => updateSelectedCrypto(symbol)}
              sx={(theme) => ({
                bgcolor: selected ? theme.palette.action.selected : "inherit",
              })}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={name}
                secondary={`$${prices[symbol]?.USD || "Laster..."}`}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );
};

export default PriceList;
