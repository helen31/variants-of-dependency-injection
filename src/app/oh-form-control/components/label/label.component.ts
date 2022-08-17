import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, } from '@angular/core';

export enum LabelPosition {
  top = 'top',
  left = 'left'
}

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
  @Input() position = LabelPosition.left;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(
      this.el.nativeElement, 'label');
    this.renderer.addClass(
      this.el.nativeElement,
      this.position === LabelPosition.left ? 'left' : 'top'
    );
  }
}
