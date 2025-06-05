export interface TransactionType {
  key: string;
  date: string;
  type: string;
  amount: string;
  account: string;
  counterparty: string;
  category: string;
  status: string;
}

export interface Supplier {
  key: string;
  name: string;
  contact: string;
  address: string;
  products: string;
  type: string;
  balance: number;
}
export interface Transaction {
  key: string;
  name: string;
  contact: string;
  address: string;
  products: string;
  type: string;
  balance: number;
}
