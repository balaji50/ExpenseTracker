import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  // RouterLink is used in the template for navigation
  // This reference prevents the "unused import" warning
  private readonly _routerLink = RouterLink;
}
