"use server";

import { currencies } from "./currencies";
import { CryptoDataResponse, CryptoPrices, CryptoTimeSeries } from "./types";

const apiKey = process.env.CRYPTOCOMPARE_API_KEY;

const baseUrl = "https://min-api.cryptocompare.com";

export const fetchPrices = async () => {
  const fsyms = currencies.map((currency) => currency.symbol).join(",");
  const url = `${baseUrl}/data/pricemulti?fsyms=${fsyms}&tsyms=USD`;

  const response = await fetch(url, {
    headers: {
      authorization: `Apikey ${apiKey}`,
    },
    next: {
      revalidate: 60, // cache for 60 seconds
    },
  });

  const data = (await response.json()) as CryptoPrices;

  return data;
};

export const fetchChartData = async (
  currency: string
): Promise<CryptoTimeSeries> => {
  const url = `${baseUrl}/data/v2/histoday?fsym=${currency}&tsym=USD&limit=30&e=CCCAGG`;

  const response = await fetch(url, {
    headers: {
      authorization: `Apikey ${apiKey}`,
    },
    next: {
      revalidate: 60, // cache for 60 seconds
    },
  });

  const data = (await response.json()) as CryptoDataResponse;

  return data.Data;
};
