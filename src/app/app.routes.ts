import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout/layout';
import { Dashboard } from './features/dashboard/dashboard/dashboard';
import { Transactions } from './features/transactions/transactions/transactions';

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
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ] 
    }
];
