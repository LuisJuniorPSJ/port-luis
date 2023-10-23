import { Component } from '@angular/core';

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css'],
})
export class NaviBarComponent {
  mobileMenuActive: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }


closeMobileMenu() {
  this.mobileMenuActive = false;
}
}