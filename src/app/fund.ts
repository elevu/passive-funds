export interface Fund {
  avatar: string;
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
}

export interface FundsResponse {
  funds: Fund[];
  items: string[];
  topFunds: Fund[];
}
