import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('class.hoverStyle') isHoover: boolean = false

  @HostListener('mouseenter') mouseEnterEvent(event: Event) {
    this.isHoover = true
  }

  @HostListener('mouseleave') mouseLeaveEvent(event: Event) {
    this.isHoover = false
  }

}
