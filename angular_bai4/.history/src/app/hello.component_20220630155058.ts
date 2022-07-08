import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>hello {{name}}!</h1>`,
  styles: [`h1 {font-family: Lato;}`]
})
export class HelloComponent  {
  @Input() name:string;


  ngOnInit() {
    console.log('hello init');
  }

  ngOnDestroy(){
    console.log('hello destroy');
  }
}
