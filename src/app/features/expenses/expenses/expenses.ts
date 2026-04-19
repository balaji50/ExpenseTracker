import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss',
})
export class Expenses {
  constructor(private router: Router) {}

  navigateToAddExpense(): void {
    this.router.navigate(['/expenses/add-expense']);
  }
}
