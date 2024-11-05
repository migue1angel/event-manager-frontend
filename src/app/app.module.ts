import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ThemeComponent } from './layout/theme/theme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { MainComponent } from './layout/main/main.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SharedModule } from './shared/shared.module';
import { errorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    MenuModule,
    IconFieldModule,
    InputIconModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([errorInterceptor])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
