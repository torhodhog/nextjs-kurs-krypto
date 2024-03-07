"use client";

// Denne er lagt til for å fjerne en warning fra recharts biblioteket
// Kilde: https://github.com/recharts/recharts/issues/3615#issuecomment-1971238184

export const TurnOffDefaultPropsWarning = () => {
  // Override console.error
  // This is a hack to suppress the warning about missing defaultProps in the recharts library
  // @link https://github.com/recharts/recharts/issues/3615
  const error = console.error;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.error = (...args: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    if (/defaultProps/.test(args[0])) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    error(...args);
  };

  return null;
};
