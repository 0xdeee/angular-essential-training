import { Component } from '@angular/core';

/**
 * (3)
 * This @component is bootstrapped by AppModule
 * So this will load first. and we can nest any number of component in it to render like a tree
 * selector is used to render this component in other component, when in html <mw-root> is parsed,
 * angular looks for a component with that as selector and renders the FIRST FOUND component.
 * template or templateUrl - define markup
 * style or styleUrl - define styles (Angular isolate the application of mentioned styles to only this
 * component by creating a directive with all styles and applying to the <mw-app> html tag on compilation,
 * an simple but effective solution)
 */
@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
