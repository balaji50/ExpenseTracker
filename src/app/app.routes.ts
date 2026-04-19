import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout/layout';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Transactions } from './features/transactions/transactions/transactions';
import { Expenses } from './features/expenses/expenses/expenses';
import { AddExpense } from './features/expenses/add-expense/add-expense';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard 
            },
            {
                path: 'transactions',
                component: Transactions
            },
            {
                path: 'expenses',
                component: Expenses
            },
            {
                path: 'expenses/add-expense',
                component: AddExpense
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ] 
    }
];
