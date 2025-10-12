import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErroMessages } from '../../../../../shared/components/erro-messages/erro-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order-service';

@Component({
  selector: 'app-address',
  imports: [ErroMessages, ReactiveFormsModule],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class Address implements OnInit {
  id: string|null= '' as string;

  // ✅ استخدام FormBuilder
  private readonly fb = inject(FormBuilder);
  private readonly orderService = inject(OrderService);
  private readonly router = inject(Router);
  private readonly activateRoute = inject(ActivatedRoute);
 addressForm:any

  // ✅ الفورم بالـ FormBuilder

 

  errorMessage: string | null = '';

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (res) => {
        this.id = res.get('id')  ; 
      },
    });
    this.initForm()
  }
  
  initForm(){
     this.addressForm = this.fb.group({
    details: [''],
    phone: ['', [Validators.required]],
    city: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(40)],
    ],
  });
  }

  createOrder() {
    if (this.addressForm.valid) {
      this.errorMessage = null;

      this.orderService.createOrder(this.id!, this.addressForm.value).subscribe({
        next: (res) => {
          
          if (res.status === 'success') {
           console.log('Success:', res);
           open(res.session.url,'_self')
          }
        
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
}
