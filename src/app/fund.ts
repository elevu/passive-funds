export interface Fund {
  category: string;
  companyName: string;
  developmentOneMonth: number;
  developmentOneYear: number;
  developmentThreeMonths: number;
  name: string;
}

export interface FundsResponse {
  funds: Fund[];
  items: string[];
  topFunds: Fund[];
}
