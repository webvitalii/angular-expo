import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHilite]'
})
export class HiliteDirective {
  @Input('appHilite') color: string = 'green';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    // renderer is used if you are planning to run app on native mobile device instead of browser
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.color);
    this.elemRef.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onLeave() {
    // renderer is used if you are planning to run app on native mobile device instead of browser
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', null);
    this.elemRef.nativeElement.style.color = null;
  }

}
