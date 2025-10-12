import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErroMessages } from '../../../../shared/components/erro-messages/erro-messages';
import { AuthServices } from '../../services/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, ErroMessages],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  errorMessage: string | null = null; // ✅ تعديل الاسم
  private readonly authService = inject(AuthServices);
  private readonly router = inject(Router);

  // ✅ Typed FormGroup
  authForm = new FormGroup(
    {
      name: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
      rePassword: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [
        Validators.required,
      
      ]),
    },
    { validators: this.checkPassword }
  );

  // ✅ التحقق من تطابق الباسورد
  checkPassword(control: AbstractControl) {
    return control.get('password')?.value === control.get('rePassword')?.value
      ? null
      : { mismatch: true }; // ✅ اسم ثابت
  }

  // ✅ إرسال البيانات
  getValue() {
    if (this.authForm.valid) {
      this.errorMessage = null; // Reset errors before request

      this.authService.register(this.authForm.value).subscribe({
        next: (res) => {
          console.log('Success:', res);
          if(res.message=='success'){
            this.router.navigate(['/login'])

          }

          // ✅ Reset form after success
          this.authForm.reset();
        },
        error: (err) => {
          this.errorMessage = err.error?.message ?? 'Something went wrong';
          console.log(this.errorMessage);
        },
      });
    } else {
      this.authForm.markAllAsTouched(); // ✅ يظهر كل الأخطاء
    }
  }
}
