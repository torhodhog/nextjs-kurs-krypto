"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import { formatCurrency } from "src/helpers/formatCurrency";
import { CryptoTimeSeries } from "src/crypto/types";

const StockChart: React.FC<{
  chartData: CryptoTimeSeries;
}> = ({ chartData }) => {
  const formattedData = chartData.Data.map((item) => ({
    time: dayjs(new Date(item.time * 1000)).format("DD/MM/YY"),
    close: item.close,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis tickFormatter={(value) => formatCurrency(value)} />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#8884d8" dot={true} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
