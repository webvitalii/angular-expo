import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective {
  @Input('appStyles') styles: {color: string, border: string} = {color: 'green', border: '1px solid blue'};

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.styles.color);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border', this.styles.border);
    console.log(this.styles.color, this.styles.border)
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', null);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border', null);
  }

}
