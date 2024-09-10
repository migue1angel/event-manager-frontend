import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent implements OnInit {
  theme: string = 'aura-light-teal';
  darkIcon = true;
  PrimeIcons = PrimeIcons;
  constructor() {
    this.setTheme(this.theme);
  }
  ngOnInit(): void {
  }

  setTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }
  changeTheme() {
    this.darkIcon = !this.darkIcon;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'aura-light-teal') this.theme = 'aura-dark-teal';
    if (currentTheme == 'aura-dark-teal') this.theme = 'aura-light-teal';
    
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = `/assets/themes/${this.theme}/theme.css`;
    localStorage.setItem('theme', this.theme);
  }
}
