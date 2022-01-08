import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form.component';
import { mediaItemFormRouting } from './media-item-form.routing';

/**
 * [sec 7.e]
 * we can can route to components in other other modules as well.
 * we just need route definitions of this module to be added as import (mediaItemFormRouting)
 * and this new module to be added in imports section of its parent module in our case app module
 */
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, mediaItemFormRouting],
  declarations: [MediaItemFormComponent],
})
export class MediaItemFormModule {}
