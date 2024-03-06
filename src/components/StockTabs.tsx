"use client";

import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useChangeCurrency } from "src/hooks/useChangeCurrency";
import { currencies } from "src/crypto/currencies";

const StockTabs: React.FC<{
  currentCurrency: string;
}> = ({ currentCurrency }) => {
  const { changeCurrency } = useChangeCurrency();

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    changeCurrency(currencies[value].symbol);
  };

  return (
    <Tabs
      value={currencies.findIndex(
        (currency) => currency.symbol === currentCurrency
      )}
      onChange={handleChange}
      aria-label="Crypto tabs"
      variant="scrollable"
      scrollButtons="auto"
    >
      {currencies.map((currency) => (
        <Tab key={currency.symbol} label={currency.name} />
      ))}
    </Tabs>
  );
};

export default StockTabs;
