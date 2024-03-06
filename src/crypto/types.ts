interface CryptoDataPoint {
  time: number;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: string;
  conversionSymbol: string;
}

export interface CryptoTimeSeries {
  Aggregated: boolean;
  TimeFrom: number;
  TimeTo: number;
  Data: CryptoDataPoint[];
}

export interface CryptoDataResponse {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: object;
  Data: CryptoTimeSeries;
}

export interface CryptoPrices {
  [symbol: string]: { USD: number };
}
