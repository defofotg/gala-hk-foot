import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Error } from 'src/app/models/login-form-error';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Input() loginForm!: FormGroup;
  @Input() pending!: boolean;
  @Input() error!: Error;
  @Output() formSubmitEvent = new EventEmitter();

  onSubmit() {
    if (this.loginForm.valid) {
      this.formSubmitEvent.emit();
    }
  }
}
