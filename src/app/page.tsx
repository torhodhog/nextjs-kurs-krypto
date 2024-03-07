import React from "react";
import { Stack, Container } from "@mui/material";
import Footer from "src/components/Footer";
import PriceList from "src/components/PriceList";
import StockChart from "src/components/StockChart";
import StockTabs from "src/components/StockTabs";
import { fetchChartData, fetchPrices } from "src/crypto/crypto-api";

export default async function Crypto({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentCurrency = (searchParams.currency || "BTC") as string;
  const chartData = await fetchChartData(currentCurrency);
  const prices = await fetchPrices();

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: {
          xs: 1,
          sm: 2,
          md: 2,
        },
      }}
    >
      <Stack
        spacing={2}
        mt={2}
        direction={{
          sm: "column",
          md: "row",
        }}
      >
        <Stack direction="column" spacing={2} flex={1}>
          <StockTabs currentCurrency={currentCurrency} />
          <StockChart chartData={chartData} />
        </Stack>
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          maxWidth={{
            sm: "100%",
            md: 300,
          }}
        >
          <PriceList prices={prices} currentCurrency={currentCurrency} />
        </Stack>
      </Stack>
      <Footer />
    </Container>
  );
}
