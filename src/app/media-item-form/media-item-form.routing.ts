import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const mediaItemFormRoutes: Routes = [
  // path is '' so that when its lazy loaded through add route in app.routing in url we dont
  // have to put add 2 times (add/add)
  { path: '', component: MediaItemFormComponent },
];

/**
 * [sec 7.f]
 * since our root module (app module) has already defined angular router
 * in the child modules we just have to use forChild()
 */
export const mediaItemFormRouting = RouterModule.forChild(mediaItemFormRoutes);
