import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LoginFormModel {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
}
