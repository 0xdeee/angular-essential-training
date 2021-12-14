import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { CommonModule } from '@angular/common';
import { FavoriteDirective } from './helper/favorite.directive';
import { CategoryListPipe } from './helper/category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * (2)
 * AppModule is bootstrapped by main.ts so this would be the first module to render
 * Module is defined by @NgModule() directive
 * imports should contain all the external module his module will be using
 * declarations should contain all the internal classes this module will be using
 * bootstrap should contain the component that this module renders on init
 * like how dynamicBrowserPlatform bootstraps AppModule (any module),
 * AppModule bootstraps AppComponent (any component)
 */
@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
