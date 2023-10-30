import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Files } from '../interface/Files';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-fancybox',
  templateUrl: './fancybox.component.html',
  styleUrls: ['./fancybox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ trasform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ trasform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('80ms', style({ opacity: 0.8 })),
      ]),
    ]),
    trigger('rightImageAnimation', [
      state('visible', style({ opacity: 1 })),
      transition('void => visible', [
        style({ transform: 'translateX(100%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0s ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('leftImageAnimation', [
      state('visible', style({ opacity: 1 })),
      transition('void => visible', [
        style({ transform: 'translateX(-100%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0s ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class FancyboxComponent {
  @Input() showMask!: boolean;
  @Input() curentIndex!: number;
  @Input() displayImages!: Files[];
  @Input() curentImage!: Files;
  @Output() showMaskValue = new EventEmitter();

  prevButton = false;
  nextButton = false;
  slideshow = false;
  progressValue = 0;
  nextInterval!: ReturnType<typeof setTimeout>;
  progressInterval!: ReturnType<typeof setTimeout>;

  constructor() {}

  ngOnInit() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    } else if (event.key === 'Escape') {
      this.closePreviewImage();
    }
  }

  onPreviewImage(index: number): void {
    this.slideshow ? this.stopSlideShow() : false;
    this.showMask = true;
    this.progressValue = 0;
    this.curentIndex = index;
    this.curentImage = this.displayImages[index];
  }

  onAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  prev(): void {
    this.curentIndex = this.curentIndex - 1;
    if (this.curentIndex < 0) {
      this.curentIndex = this.displayImages.length - 1;
    }
    this.curentImage = this.displayImages[this.curentIndex];
    this.prevButton = true;
    this.slideshow ? this.stopSlideShow() : false;
  }

  next(): void {
    this.curentIndex = this.curentIndex + 1;
    if (this.curentIndex > this.displayImages.length - 1) {
      this.curentIndex = 0;
    }
    this.curentImage = this.displayImages[this.curentIndex];
    this.nextButton = true;
    this.slideshow ? this.stopSlideShow() : false;
  }

  onSlideAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'visible') {
      this.prevButton = false;
      this.nextButton = false;
    }
  }

  closePreviewImage(): void {
    this.showMask = false;
    this.stopSlideShow();
    this.showMaskValue.emit(this.showMask);
  }

  startProgressBar(): void {
    const totalTime = 4000;
    const interval = 200;
    const increment = (interval / totalTime) * 100;

    this.progressInterval = setInterval(() => {
      if (this.progressValue <= 100) {
        this.progressValue += increment + 1;
      } else {
        this.curentIndex = this.curentIndex + 1;
        if (this.curentIndex > this.displayImages.length - 1) {
          this.curentIndex = 0;
        }
        this.curentImage = this.displayImages[this.curentIndex];
        this.nextButton = true;
        this.progressValue = 0;
        clearInterval(this.progressInterval);
      }
    }, interval);
  }

  playSlideShow(): void {
    if (this.slideshow) {
      this.stopSlideShow();
    } else {
      this.slideshow = true;
      this.progressValue = 0;
      this.startProgressBar();
      this.nextInterval = setInterval(() => {
        this.progressValue = 0;
        this.startProgressBar();
      }, 4000);
    }
  }

  stopSlideShow(): void {
    this.slideshow = false;
    this.progressValue = 0;
    clearInterval(this.nextInterval);
    clearInterval(this.progressInterval);
  }
}
