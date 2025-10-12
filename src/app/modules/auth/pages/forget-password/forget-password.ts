import { Component, inject } from '@angular/core';
import { ErroMessages } from "../../../../shared/components/erro-messages/erro-messages";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServices } from '../../services/auth-services';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  standalone: true, // 👈 مهم جدًا
  imports: [ErroMessages, ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss'
})
export class ForgetPassword {
  private readonly authServices = inject(AuthServices);
  private readonly router = inject(Router);

  statusMsg: string = '';
  message: string = '';

   authForm = new FormGroup({
      email: new FormControl<string>('', [
          Validators.required,
          Validators.email,
        ]),
       
   
    });

 getValue() {
  if (this.authForm.valid) {
    this.authServices.forgetPassword(this.authForm.value!).subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.statusMsg = res.statusMsg;
        this.message = res.message;
        this.router.navigate(['/verification'])
        
      },
      error: (err) => {
        this.statusMsg = 'error';
        this.message = err.error?.message || 'Something went wrong!';
      }
    });
  } else {
    this.authForm.markAsTouched();
  }
}


}
