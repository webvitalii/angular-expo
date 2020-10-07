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
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.color);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', null);
  }

}
