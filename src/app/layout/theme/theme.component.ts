import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent implements OnInit {
  theme: string = localStorage.getItem('theme')||'aura-light-teal';
  darkIcon : boolean = localStorage.getItem('theme')==='aura-light-teal' ? true : false;
  PrimeIcons = PrimeIcons;
  constructor() {
    this.setTheme(this.theme);
  }
  ngOnInit(): void {}

  setTheme(theme: string) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
      themeLink.href = `/assets/themes/${currentTheme}/theme.css`;
    }
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
