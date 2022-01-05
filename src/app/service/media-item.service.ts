/**
 * [12.b]
 * Services are not specific to Angular, they are a Design Pattern
 * when have set of functionalities that are commonly required across components we can
 * use service pattern
 * a singleton instance of service class will be created and injected to all components that
 * require this.
 * It helps with SOC, Modularization, Unit testable code etc.
 */

import { Injectable } from '@angular/core';

/**
 * instead of defining service class as a provider in module, we can use Injectable decorator
 * to tell angular that this is a service class and inject the object in all the component that
 * listed it a dependency
 * providedIn param can be used to lazy load service file in run time based on the specification,
 * root loads the service class in the root level and keeps it accessible across all components
 */
@Injectable({
  providedIn: 'root',
})
export class MediaItemService {
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true,
    },
    {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
  ];

  get(medium: string) {
    return medium === 'all'
      ? this.mediaItems
      : this.mediaItems.filter((mediaItem) => mediaItem.medium === medium);
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
