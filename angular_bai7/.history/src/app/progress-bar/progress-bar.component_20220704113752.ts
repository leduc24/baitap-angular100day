import { isNgTemplate } from '@angular/compiler';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ɵɵNgOnChangesFeature,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
    `,
  styles: [
    `
    .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 50;
  @Input() backgroundColor = '#acc';
  @Input() progressColor = 'tomato';

  constructor() {
    console.log({
      progress: this.progress,
      background: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}
