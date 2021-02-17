import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //111111111111111111111111111111111111111111111111111111111111111111111
    //NO EVENT IS HAPPENING
     //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
     //NO EVENT IS HAPPENING

    //FOR USING @Input()
     //this.backgroundColor = 'blue';
     //this.backgroundColor = 'transparent';
  }
  

  //22222222222222222222222222222222222222222222222222222222222222222222222
  //WITH HOST LISTENER .... DIRECTIVE REACTING TO ANY EVENTS
  /* @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  } */
   //WITH HOST LISTENER .... DIRECTIVE REACTING TO ANY EVENTS


   //33333333333333333333333333333333333333333333333333333333333333333333333333
   //WITH HOST BINDING .... DIRECTIVE REACTING TO ANY EVENTS
   
  /* @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 
   @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'lime';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'red';
  } */
 
  //WITH HOST BINDING .... DIRECTIVE REACTING TO ANY EVENTS


//4444444444444444444444444444444444444444444444444444444444444444444444444
//ASSIGN THE DIRECTIVE WITH A VARIABLE CUSTOM COLOR...HERE COLOR IS NOT 

/* @Input() defaultColor: string = 'transparent';
@Input() highlightColor: string = 'transparent';
@HostBinding('style.backgroundColor') backgroundColor: string;

@HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor = this.highlightColor; 
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor = this.defaultColor;
} */ 


/* SETTING ALIAS FOR THE HILIGHT COLOR */
/* @Input() defaultColor: string = 'transparent';
@Input('appBetterHighlight') highlightColor: string = 'blue';//SETTING ALIAS FOR THE HILIGHT COLOR
@HostBinding('style.backgroundColor') backgroundColor: string;

@HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor = this.defaultColor;
} */


  
  
  
  

//=======================================================================================================
/* @Input() defaultColor: string = 'transparent';
@Input('appBetterHighlight') highlightColor: string = 'blue';
@HostBinding('style.backgroundColor') backgroundColor: string;

@HostListener('mouseenter') mouseover(eventData: Event) {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor = this.defaultColor;
} */





/*   @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  } */

}
