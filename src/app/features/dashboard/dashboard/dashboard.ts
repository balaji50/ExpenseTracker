import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartConfiguration, Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  // Bar chart
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [30000, 35000, 40000, 28000, 45000, 50000],
        label: 'Income'
      },
      {
        data: [15000, 18000, 20000, 17000, 22000, 25000],
        label: 'Expense'
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  // Pie chart
  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Food', 'Transport', 'Shopping', 'Bills', 'Entertainment'],
    datasets: [
      {
        data: [7500, 4200, 3200, 2100, 1800]
      }
    ]
  };

  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true
  };
}
