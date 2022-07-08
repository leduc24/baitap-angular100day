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
    
  }
  ngOnInit() {
    console.log('onInit',{
      progress: this.progress,
      background: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',{
      progress: this.progress,
      background: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
/*  @Input()set progress(val: number ) {
      // validation for validation 
      // console.log({val});

      if (typeof value !== "number") {
        const progress = Number(value);
          if (Number.isNaN(progress)) {
            this._progress = 0;
          } else {
        this._progress = progress;
          }
      this._progress = val;
  }

    private_progress = 50;
    get progress(){
      return this._progress;
    }
*/   
