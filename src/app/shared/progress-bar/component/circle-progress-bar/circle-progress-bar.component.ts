import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleProgressBarComponent implements AfterViewInit {
  private percent: number;

  @Input() public speed = 20;
  @Input({ required: true })
  public set vote(rating: number) {
    if (rating === 0) {
      this.notValue = true;
    }

    this.percent = rating * 10;
  }

  @ViewChild('progress') private progressBar: ElementRef<HTMLDivElement>;

  public progressValue = 0;
  public notValue: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {}

  public ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      if (!this.notValue) {
        const interval = setInterval(() => {
          if (this.percent === this.progressValue) {
            clearInterval(interval);
            return;
          }

          this.progressValue++;
          this.progressBar.nativeElement.style.background = `conic-gradient(#06d1de ${
            this.progressValue * 3.6
          }deg, #006b72 ${this.progressValue * 3.6}deg)`;
          this.cd.detectChanges();
        }, this.speed);
      }
    });
  }
}
