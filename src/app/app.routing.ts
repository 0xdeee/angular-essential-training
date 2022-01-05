import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

/**
 * [sec 7.a]
 * Angular uses the browser and history to enable clint side routing without having to
 * get server.
 * in order to define routes we need to define which component to load for with uri path
 * in an object of routes type.
 * then we have to pass the Routes to forRoot() static method in class RouterModule to get
 * a object of type ModuleWithProviders<RouterModule>
 * we can pass this object to App Module for the routes to be enabled
 */

const appRoutes: Routes = [
  // routes are to be defined form most specific to least specific
  { path: 'add', component: MediaItemFormComponent },
  // ":" using means its a route param
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
];

export const router = RouterModule.forRoot(appRoutes);
