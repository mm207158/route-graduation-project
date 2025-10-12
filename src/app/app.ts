import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('finalProject');
  id=inject(PLATFORM_ID);
  ngOnInit(): void {
    if(isPlatformBrowser(this.id)){
      localStorage.setItem('mariam','mahmoud');
    }
    
  }

}
