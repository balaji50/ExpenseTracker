import { Component, HostListener, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Navbar } from '../navbar/navbar';
import { Sidebarservice } from '../../../services/sidebarservice/sidebarservice';
import { WINDOW } from '../../../common/window.token';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Sidebar, Navbar, RouterOutlet, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  isSidebarOpen: boolean = true;

  constructor
    (
      private sidebarService: Sidebarservice,
      @Inject(WINDOW) private window: Window | null
    ) { this.toggleState() }

  // Reuseable function for toggle btn
  toggleState() {
    this.sidebarService.sidebarStatus.subscribe(state => {
      this.isSidebarOpen = state;
    })
  }

  closeSidebarOnMobile() {
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false;
    }
  }

  // Detect screen size
  @HostListener('window:resize', [])
  onresize() {
    const width = window?.innerWidth;
    if (width < 768) {
      this.sidebarService.closeSidebar();
      this.toggleState();
    } else if (width > 768) {
      this.sidebarService.openSidebar();
    }
  }
}
