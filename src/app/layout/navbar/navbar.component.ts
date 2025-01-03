import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private readonly authService = inject(AuthService);
  protected get currentUser() {
    return this.authService.currentUser;
  }
  items: any[] = [];
  profileItems: any[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/home',
      },
      {
        label: 'Eventos',
        icon: 'pi pi-tag',
        items: [
          {
            label: 'Explorar',
            icon: 'pi pi-globe',
            route: 'core/event/public/event-list',
          },
          {
            label: 'Mis eventos',
            icon: 'pi pi-calendar',
              route: 'core/organizer/my-events',
          },
        ],
      },
    ];
    this.profileItems = [
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        route: 'auth/profile',
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
      },
    ];
  }

  logout() {
    this.authService.logout();
  }
}
