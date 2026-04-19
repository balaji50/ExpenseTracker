export interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  categoryIcon: string;
  type: 'income' | 'expense';
  amount: number;
  paymentMethod: string;
  paymentIcon: string;
}

export interface TransactionFilter {
  search: string;
  category: string;
  type: string;
  dateRange: string;
  startDate?: Date;
  endDate?: Date;
}
