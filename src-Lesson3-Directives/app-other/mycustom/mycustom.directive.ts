import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMycustom]'
})
export class MycustomDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    // Use renderer to render the element with styles
      //renderer.setElementStyle(el.nativeElement, 'display', 'none');
      renderer.setElementStyle(el.nativeElement, 'background', 'cyan');
   }

}
