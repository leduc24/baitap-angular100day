import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Huynh Duc';
  checked = true;
  showLast = true;
  @ViewChild('chareContainer') container: ElementRef<HTMLDivElement>;
  @ViewChild('toggleComp') toggleComp: ToggleComponent;
  @ViewChild(ToggleComponent) toggleList: QueryList<ToggleComponent>;

  ngOnInt() {
    console.log(this.container);
  }
  ngAfterViewInt() {
    console.log(this.container, this.toggleList);
  }
  toggleInside() {
    this.toggleComp.toggle();
  }
}
