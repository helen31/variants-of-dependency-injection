import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlComponent {}
