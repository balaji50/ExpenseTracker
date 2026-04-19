export interface ExpenseForm {
  title: string;
  amount: number;
  category: string;
  date: Date;
  paymentMethod: string;
  account: string;
  notes?: string;
}

export interface Category {
  value: string;
  label: string;
}

export interface PaymentMethod {
  value: string;
  label: string;
}

export interface Account {
  value: string;
  label: string;
}
