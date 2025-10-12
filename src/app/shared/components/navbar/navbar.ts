import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'node:console';
import { AuthServices } from '../../../modules/auth/services/auth-services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private readonly authServices =inject(AuthServices)
  ngOnInit(): void {
    console.log(this.authServices.decodToken());
    
    
  }
   @Input() isLogin!:boolean;
  isOpen:boolean=true;
  mobileToggle(){
    this.isOpen=!this.isOpen
    console.log('nav is open')
  }
 logout(){
  this.authServices.logOut();
 }

}
