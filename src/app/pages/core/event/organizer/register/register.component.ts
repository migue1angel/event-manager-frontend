import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../../../services/http/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  protected form! : FormGroup;
  private readonly authService = inject(AuthService);

}
