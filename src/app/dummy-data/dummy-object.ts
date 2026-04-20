import { Account, Category, PaymentMethod } from "../model/add-expense.model";
import { Activities, Groups } from "../model/groups.model";
import { Transaction } from "../model/transaction.model";


export const TransactionsData: Transaction[] = [
  {
    id: '1',
    date: new Date('2026-04-25'),
    description: 'Swiggy Order',
    category: 'Food & Dining',
    categoryIcon: 'bi-cup-hot',
    type: 'expense',
    amount: 520.00,
    paymentMethod: 'UPI',
    paymentIcon: 'bi-phone'
  },
  {
    id: '2',
    date: new Date('2026-03-24'),
    description: 'Salary Credit',
    category: 'Salary',
    categoryIcon: 'bi-briefcase',
    type: 'income',
    amount: 54200.00,
    paymentMethod: 'Bank Transfer',
    paymentIcon: 'bi-bank'
  },
  {
    id: '3',
    date: new Date('2024-05-23'),
    description: 'Uber Ride',
    category: 'Transport',
    categoryIcon: 'bi-car-front',
    type: 'expense',
    amount: 286.00,
    paymentMethod: 'UPI',
    paymentIcon: 'bi-phone'
  },
  {
    id: '4',
    date: new Date('2024-05-22'),
    description: 'Electricity Bill',
    category: 'Bills & Utilities',
    categoryIcon: 'bi-lightbulb',
    type: 'expense',
    amount: 1200.00,
    paymentMethod: 'Card',
    paymentIcon: 'bi-credit-card'
  },
  {
    id: '5',
    date: new Date('2024-05-21'),
    description: 'Movie Tickets',
    category: 'Entertainment',
    categoryIcon: 'bi-film',
    type: 'expense',
    amount: 480.00,
    paymentMethod: 'UPI',
    paymentIcon: 'bi-phone'
  }
];

export const Categories: Category[] = [
  { value: 'food', label: 'Food & Dining' },
  { value: 'transport', label: 'Transport' },
  { value: 'bills', label: 'Bills & Utilities' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'health', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'salary', label: 'Salary' },
  { value: 'freelance', label: 'Freelance' },
  { value: 'investment', label: 'Investment' },
  { value: 'other', label: 'Other' }
];

export const PaymentMethods: PaymentMethod[] = [
  { value: 'upi', label: 'UPI' },
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'cash', label: 'Cash' },
  { value: 'bank', label: 'Bank Transfer' },
  { value: 'wallet', label: 'Digital Wallet' }
];

export const Accounts: Account[] = [
  { value: 'personal', label: 'Personal Account' },
  { value: 'business', label: 'Business Account' },
  { value: 'savings', label: 'Savings Account' },
  { value: 'credit', label: 'Credit Card' }
];

export const GroupsList: Groups[] = [
  {
    name: 'Goa Trip',
    members: 5,
    type: 'owe',
    amount: 2450
  },
  {
    name: 'Office Team',
    members: 8,
    type: 'get',
    amount: 1120
  },
  {
    name: 'Roommates',
    members: 3,
    type: 'owe',
    amount: 890
  }
];

export const ActivitiesList: Activities[] = [
  {
    date: 'May 25, 2024',
    text: 'Dinner bill added by Saravanan',
    group: 'Goa Trip',
    amount: 1250
  },
  {
    date: 'May 24, 2024',
    text: 'Travel expense added by You',
    group: 'Office Team',
    amount: 860
  },
  {
    date: 'May 23, 2024',
    text: 'Grocery bill added by Karthik',
    group: 'Roommates',
    amount: 1230
  }
];