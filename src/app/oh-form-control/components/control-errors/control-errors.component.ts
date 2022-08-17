import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { LabelPosition } from '../label/label.component';

@Component({
  selector: 'app-control-errors[control]',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.css']
})
export class ControlErrorsComponent implements AfterViewInit {
  @Input() control!: AbstractControl | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const labelElem = ((this.el.nativeElement as HTMLElement).parentElement?.querySelector('.label') as HTMLElement);

    if (labelElem?.classList.contains(LabelPosition.left)) {
      const width = labelElem?.offsetWidth;
      this.renderer.setStyle(this.el.nativeElement,'padding-left', width + 'px')
    }
  }
}
