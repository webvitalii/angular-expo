import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective {
  private stylesDefault = { color: 'green', border: '1px solid blue' };
  @Input('appStyles') styles: { color: string; border: string };

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    // renderer is used if you are planning to run app on native mobile device instead of browser
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', this.styles.color);
    this.elemRef.nativeElement.style.color = this.styles?.color || this.stylesDefault.color;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'border', this.styles.border);
    this.elemRef.nativeElement.style.border = this.styles?.border || this.stylesDefault.border;
  }

  @HostListener('mouseleave') onLeave() {
    // renderer is used if you are planning to run app on native mobile device instead of browser
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', null);
    this.elemRef.nativeElement.style.color = null;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'border', null);
    this.elemRef.nativeElement.style.border = null;
  }
}
