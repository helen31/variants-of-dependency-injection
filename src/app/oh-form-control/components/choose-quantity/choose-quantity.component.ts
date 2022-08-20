import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-choose-quantity[increment]',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseQuantityComponent implements ControlValueAccessor {
  quantity = 0;

  @Input() increment!: number;

  private onChange!: (quantity: number) => void;
  private onTouched!: () => void;
  private touched = false;
  private disabled = false;

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onRemove(): void {
    this.markAsTouched();
    if(!this.disabled) {
      this.quantity-= this.increment;
      this.onChange(this.quantity);
    }
  }

  onAdd(): void {
    this.markAsTouched();
    if(!this.disabled) {
      this.quantity+= this.increment;
      this.onChange(this.quantity);
    }
  }

  private markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
