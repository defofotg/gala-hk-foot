import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentication/auth.service';
import { Error } from '../models/login-form-error';
import { StorageService } from '../services/storage.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, RouterModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  pending = false;
  error = {} as Error;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/administration']);
    }

    this.loginForm.controls['email'].valueChanges.subscribe(() => {
      this.loginForm.controls['email'].markAsTouched();
      this.error = this.processFormErrors(this.loginForm);
    });

    this.loginForm.controls['password'].valueChanges.subscribe(() => {
      this.loginForm.controls['password'].markAsTouched();
      this.error = this.processFormErrors(this.loginForm);
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.pending = true;
    this.error = {} as Error;

    this.authService.signIn(this.loginForm.value).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        //this.authService.setValue(true);
        this.toastrService.success('Connexion réussie!');
        this.router.navigate(['/administration']);
      },
      error: (err) => {
        this.pending = false;
        this.error.message = err;
        this.toastrService.error('Connexion échouée!');
      },
    });
  }

  processFormErrors(form: FormGroup): Error {
    const error = {} as Error;
    if (form.get('email')?.touched && form.get('email')?.invalid) {
      error.email = true;
      error.form = true;
    }

    if (form.get('password')?.touched && form.get('password')?.invalid) {
      error.password = true;
      error.form = true;
    }
    return error;
  }
}
