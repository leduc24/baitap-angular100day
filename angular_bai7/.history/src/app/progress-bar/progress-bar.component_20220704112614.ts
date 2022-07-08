import { Component, Input } from "@angular/core";

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
    styles: [`
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
export class ProgressBarComponent implememts OnInit, Onchanges 
{
    @Input() progress = 50; 
    @Input() backgroundColor = '#acc';
    @Input() progressColor = 'tomato';

    constructor(){
      consolo.log({
        progress: this.progress,
        backgroundColor: this.backgroundColor,
        progressColor: this.progressColor,
      });
    }
    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges){
      
    }
}

