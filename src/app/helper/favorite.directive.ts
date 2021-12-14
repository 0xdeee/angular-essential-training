import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})
export class FavoriteDirective {
  /**
   * [7.b]
   * @HostBinding is used in a directive to bind properties to its host element
   * i.e, in which this directive is used. here it binds to media-item component
   * this specifically binds if-favorite css class to its host elements based on value passed
   */
  @HostBinding('class.is-favorite') isFavorite = true;
  /**
   * [8]
   * @HostListener - along with binding properties to its host we can use HostListener to listen
   * to events in the host. here we are listening to mouseenter & mouseleave event in host
   * and binding class based on those events
   */
  @HostBinding('class.is-favorite-hovering') isHovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }
  /**
   * [7.b cont]
   * this is another way of using @Input
   * before we directly referred the property to receive value from host
   * here we are using a setter function with same name to update a property with diff name
   */
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
