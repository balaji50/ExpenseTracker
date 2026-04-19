import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Transaction, TransactionFilter } from '../../../model/transaction.model';
import { TransactionsData } from '../../../dummy-data/dummy-object';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions {

  transactionList = TransactionsData;
  matchesDate: boolean = true;
  now = new Date();
  currentMonth = this.now.getMonth();
  currentYear = this.now.getFullYear();

  filter: TransactionFilter = {
    search: '',
    category: '',
    type: '',
    dateRange: 'this-month'
  };

  get filteredTransactions(): Transaction[] {
    return this.transactionList.filter(transaction => {
      const matchesSearch = !this.filter.search ||
        transaction.description.toLowerCase().includes(this.filter.search.toLowerCase());
        
      const matchesCategory = !this.filter.category ||
        transaction.category.toLowerCase().includes(this.filter.category.toLowerCase());

      const matchesType = !this.filter.type ||
        transaction.type === this.filter.type;

      // Date filtering logic
      this.dateAndMonthFilter(transaction);
      return matchesSearch && matchesCategory && matchesType && this.matchesDate;
    });
  }

  dateAndMonthFilter(transaction: Transaction) {
    if (this.filter.dateRange) {
      const transactionDate = new Date(transaction.date);
      const transactionMonth = transactionDate.getMonth();
      const transactionYear = transactionDate.getFullYear();

      switch (this.filter.dateRange) {
        case 'this-month':
          this.matchesDate = transactionMonth === this.currentMonth && transactionYear === this.currentYear;
          break;
        case 'last-month':
          const lastMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
          const lastMonthYear = this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
          this.matchesDate = transactionMonth === lastMonth && transactionYear === lastMonthYear;
          break;
        case 'this-year':
          this.matchesDate = transactionYear === this.currentYear;
          break;
        case 'custom':
          // Check if transaction is within custom date range
          if (this.filter.startDate && this.filter.endDate) {
            const startDate = new Date(this.filter.startDate);
            const endDate = new Date(this.filter.endDate);
            this.matchesDate = transactionDate >= startDate && transactionDate <= endDate;
          } else {
            this.matchesDate = true; // If no dates set, show all
          }
          break;
        default:
          this.matchesDate = true;
      }
    }

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