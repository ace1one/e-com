import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host:{
    class:'app-root'
  }
})
export class AppComponent {
  title = 'e-com';
}
