import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomLabel]',
})
export class CustomLabelDirective implements OnInit {
  @Input() label!: string;
  private htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setLabel()
  }

  setLabel() {
    this.htmlElement.nativeElement.innerText = `${this.label}:`;
  }
}
