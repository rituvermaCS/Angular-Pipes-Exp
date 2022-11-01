import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'AngPipes';
  msg : string = 'Upper Case';
  toDate : Date = new Date();
  per : number = .7414;
  num : number = 9542.14554; 
}
