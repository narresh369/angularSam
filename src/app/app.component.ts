import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  // styleUrls: ['./app.component.css']
  
  //inline styling
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class AppComponent {
}
