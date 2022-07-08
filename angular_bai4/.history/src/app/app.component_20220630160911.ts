import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'angular_bai4';
  show = false;


  user = {
    name: ' duc',
    age: 22
  }
}