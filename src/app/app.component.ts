import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trainName ='Garibhratrh Pune Express';
  avalTicket = 100;

  bookTicket(){
  this.avalTicket--;
 }
 cancelTicket(){
     this.avalTicket++;
 }
}
