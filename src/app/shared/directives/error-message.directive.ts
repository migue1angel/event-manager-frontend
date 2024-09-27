import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appErrorMessage]',
})
export class ErrorMessageDirective {
  private htmlElement: ElementRef<HTMLElement>;
  private _errors?: ValidationErrors | null;
  private _touched?: boolean = false;
  private _dirty?: boolean = false;

  @Input() set errors(value: ValidationErrors | null) {
    this._errors = value;
    this.setErrorMessage();
  }

  @Input() set touched(value: boolean) {
    this._touched = value;
    this.setErrorMessage();
  }

  @Input() set dirty(value: boolean) {
    this._dirty = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.classList.add('hidden');
      return;
    }

    const errors = Object.keys(this._errors);
    if (this._touched || this._dirty) {
      this.htmlElement.nativeElement.classList.add('p-error');
      this.htmlElement.nativeElement.classList.remove('hidden');
      if (errors.includes('required')) {
        this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
        return;
      }
      if (errors.includes('minlength')) {
        const min = this._errors['minlength']['requiredLength'];
        const current = this._errors['minlength']['actualLength'];
        this.htmlElement.nativeElement.innerText = `${current}/${min} caracteres requeridos`;
        return;
      }
    }
  }
}
