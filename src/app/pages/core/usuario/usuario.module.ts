import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.routing';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    UsuarioRoutingModule,
    ButtonModule,
    DataViewModule,
    TagModule
  ]
})
export class UsuarioModule { }

