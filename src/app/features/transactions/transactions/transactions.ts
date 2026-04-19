import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Transaction, TransactionFilter } from './transaction.model';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {
  transactions: Transaction[] = [
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

  filter: TransactionFilter = {
    search: '',
    category: '',
    type: '',
    dateRange: 'this-month'
  };

  get filteredTransactions(): Transaction[] {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    return this.transactions.filter(transaction => {
      const matchesSearch = !this.filter.search || 
        transaction.description.toLowerCase().includes(this.filter.search.toLowerCase());
      
      const matchesCategory = !this.filter.category || 
        transaction.category.toLowerCase().includes(this.filter.category.toLowerCase());
      
      const matchesType = !this.filter.type || 
        transaction.type === this.filter.type;
      
      // Date filtering logic
      let matchesDate = true;
      if (this.filter.dateRange) {
        const transactionDate = new Date(transaction.date);
        const transactionMonth = transactionDate.getMonth();
        const transactionYear = transactionDate.getFullYear();
        
        switch (this.filter.dateRange) {
          case 'this-month':
            matchesDate = transactionMonth === currentMonth && transactionYear === currentYear;
            break;
          case 'last-month':
            const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
            matchesDate = transactionMonth === lastMonth && transactionYear === lastMonthYear;
            break;
          case 'this-year':
            matchesDate = transactionYear === currentYear;
            break;
          case 'custom':
            // Check if transaction is within custom date range
            if (this.filter.startDate && this.filter.endDate) {
              const startDate = new Date(this.filter.startDate);
              const endDate = new Date(this.filter.endDate);
              matchesDate = transactionDate >= startDate && transactionDate <= endDate;
            } else {
              matchesDate = true; // If no dates set, show all
            }
            break;
          default:
            matchesDate = true;
        }
      }
      
      return matchesSearch && matchesCategory && matchesType && matchesDate;
    });
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }

  onDateRangeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    
    if (value !== 'custom') {
      // Reset custom dates when switching to preset ranges
      this.filter.startDate = undefined;
      this.filter.endDate = undefined;
    }
  }

  onDateFilterChange(): void {
    // Trigger filtering when dates change
  }

  clearFilters(): void {
    this.filter = {
      search: '',
      category: '',
      type: '',
      dateRange: 'this-month',
      startDate: undefined,
      endDate: undefined
    };
  }
}
