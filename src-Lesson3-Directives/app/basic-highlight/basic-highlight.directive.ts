import { Directive, OnInit, ElementRef } from '@angular/core';

//directives do not have templates like components....

@Directive({
  selector: '[appBasicHighlight]'//camel case
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'lime';     
  }
}
