export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
  });

  const formattedValue = formatter.format(value);

  return formattedValue;
};
