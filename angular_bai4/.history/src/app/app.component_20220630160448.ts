import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'angular_bai4';


  user = {
    name: ' duc',
    age: 22
  };
}