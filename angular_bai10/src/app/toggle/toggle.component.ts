import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkChange = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit() {}

  toggle() {
    this.checked = !this.checked;
    this.checkChange.emit(this.checked);
  }
}
