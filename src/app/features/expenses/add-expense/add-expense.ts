import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseForm, Category, PaymentMethod, Account } from './add-expense.model';
import { Transaction } from '../../transactions/transactions/transaction.model';

@Component({
  selector: 'app-add-expense',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.html',
})
export class AddExpense {
  expenseForm: ExpenseForm = {
    title: '',
    amount: 0,
    category: '',
    date: new Date(),
    paymentMethod: '',
    account: '',
    notes: ''
  };

  categories: Category[] = [
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

  paymentMethods: PaymentMethod[] = [
    { value: 'upi', label: 'UPI' },
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'cash', label: 'Cash' },
    { value: 'bank', label: 'Bank Transfer' },
    { value: 'wallet', label: 'Digital Wallet' }
  ];

  accounts: Account[] = [
    { value: 'personal', label: 'Personal Account' },
    { value: 'business', label: 'Business Account' },
    { value: 'savings', label: 'Savings Account' },
    { value: 'credit', label: 'Credit Card' }
  ];

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.isFormValid()) {
      // Create transaction object
      const transaction: Transaction = {
        id: this.generateId(),
        date: this.expenseForm.date,
        description: this.expenseForm.title,
        category: this.getCategoryLabel(this.expenseForm.category),
        categoryIcon: this.getCategoryIcon(this.expenseForm.category),
        type: 'expense',
        amount: this.expenseForm.amount,
        paymentMethod: this.getPaymentMethodLabel(this.expenseForm.paymentMethod),
        paymentIcon: this.getPaymentMethodIcon(this.expenseForm.paymentMethod)
      };

      // Store in localStorage for now (can be replaced with service/API)
      this.saveTransaction(transaction);
      
      // Navigate back to expenses page
      this.router.navigate(['/expenses']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/expenses']);
  }

  isFormValid(): boolean {
    return !!(this.expenseForm.title && 
              this.expenseForm.amount > 0 && 
              this.expenseForm.category && 
              this.expenseForm.paymentMethod && 
              this.expenseForm.account);
  }

  private generateId(): string {
    return Date.now().toString();
  }

  private getCategoryLabel(value: string): string {
    const category = this.categories.find(cat => cat.value === value);
    return category ? category.label : value;
  }

  private getCategoryIcon(value: string): string {
    const icons: { [key: string]: string } = {
      'food': 'bi-cup-hot',
      'transport': 'bi-car-front',
      'bills': 'bi-lightbulb',
      'entertainment': 'bi-film',
      'shopping': 'bi-bag',
      'health': 'bi-heart-pulse',
      'education': 'bi-book',
      'salary': 'bi-briefcase',
      'freelance': 'bi-laptop',
      'investment': 'bi-graph-up',
      'other': 'bi-three-dots'
    };
    return icons[value] || 'bi-tag';
  }

  private getPaymentMethodLabel(value: string): string {
    const method = this.paymentMethods.find(pm => pm.value === value);
    return method ? method.label : value;
  }

  private getPaymentMethodIcon(value: string): string {
    const icons: { [key: string]: string } = {
      'upi': 'bi-phone',
      'card': 'bi-credit-card',
      'cash': 'bi-cash',
      'bank': 'bi-bank',
      'wallet': 'bi-wallet2'
    };
    return icons[value] || 'bi-credit-card';
  }

  private saveTransaction(transaction: Transaction): void {
    // Get existing transactions from localStorage
    const existingTransactions = localStorage.getItem('transactions');
    const transactions = existingTransactions ? JSON.parse(existingTransactions) : [];
    
    // Add new transaction
    transactions.push(transaction);
    
    // Save back to localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
}
