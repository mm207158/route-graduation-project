import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../../shared/components/navbar/navbar";
import { FooterComponent } from "../../shared/components/footer/footer.component";


@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, Navbar, FooterComponent],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss'
})
export class UserLayout {

}
