import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isLightTheme: boolean = true;

  constructor() {}

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
  }

  isLight() {
    return this.isLightTheme;
  }
}
