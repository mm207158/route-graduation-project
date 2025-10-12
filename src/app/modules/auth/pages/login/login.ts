import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErroMessages } from '../../../../shared/components/erro-messages/erro-messages';
import { AuthServices } from '../../services/auth-services';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ErroMessages, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  });
  errorMessage: string | null = '';
  private readonly authService = inject(AuthServices);
  private readonly router = inject(Router);

  getValue() {
    if (this.loginForm.valid) {
      this.errorMessage = null; // Reset errors before request

      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Success:', res);
          if (res.message == 'success') {
            this.authService.saveToken(res.token);
            this.router.navigate(['/user/home']);
          }

          // ✅ Reset form after success
          this.loginForm.reset();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched(); // ✅ يظهر كل الأخطاء
    }
  }
}
