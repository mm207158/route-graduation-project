import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../shared/components/navbar/navbar";
import { FooterComponent } from "../../shared/components/footer/footer.component";


@Component({
  selector: 'app-auth-layout',
  
  imports: [RouterOutlet, Navbar, FooterComponent],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss'
})
export class AuthLayout {

}
