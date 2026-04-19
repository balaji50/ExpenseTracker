import { Component } from '@angular/core';
import { Sidebarservice } from '../../../services/sidebarservice/sidebarservice';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  constructor(private sidebarservice: Sidebarservice) { }

  toggleSidebar() {
    this.sidebarservice.toggleSidebar();
  }
}
