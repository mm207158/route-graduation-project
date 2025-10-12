import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';   // ✅ بدل express
import { CommonModule } from '@angular/common';
import { AuthServices } from '../../services/auth-services';

@Component({
  selector: 'app-verify-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify-component.html',
  styleUrl: './verify-component.scss'
})
export class VerifyComponent {
  private readonly authServices = inject(AuthServices);
  private readonly router = inject(Router);

  statusMsg: string = '';
  message: string = '';

  // نخزن الكود في Array
  code: string[] = ['', '', '', '', '', ''];

  authForm = new FormGroup({
    resetCode: new FormControl<string>('', [Validators.required])
  });

  // لما يكتب في أي input
  onInput(event: any, index: number) {
    const value = event.target.value;

    if (value && index < this.code.length - 1) {
      document.getElementById('input-' + (index + 1))?.focus();
    }
  }

  getValue() {
    const resetCode = this.code.join(''); // 123456
    this.authForm.patchValue({ resetCode });

    if (this.authForm.valid) {
      this.authServices.forgetPassword(this.authForm.value!).subscribe({
        next: (res) => {
          console.log('API Response:', res);
          // ممكن بعد النجاح تروحي للصفحة التانية
          // this.router.navigate(['/reset-password']);
        },
        error: (err) => {
          this.statusMsg = 'error';
          this.message = err.error?.message || 'Something went wrong!';
        }
      });
    } else {
      this.authForm.markAllAsTouched();
    }
  }
}
