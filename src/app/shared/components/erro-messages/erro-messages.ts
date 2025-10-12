import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-erro-messages',
  imports: [],
  templateUrl: './erro-messages.html',
  styleUrl: './erro-messages.scss'
})
export class ErroMessages {
  @Input() control!:AbstractControl|null

}
