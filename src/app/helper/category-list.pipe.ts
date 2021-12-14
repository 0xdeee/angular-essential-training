import { Pipe, PipeTransform } from '@angular/core';

/**
 * [8.b]
 * Custom pipes can be create using @Pipe decorator
 * we can pass name and pure (true || false) it defines if the pipe will
 * alter the original input or not. default is true
 */
@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe implements PipeTransform {
  /**
   * [8.c]
   * any param we passed with custom pipe with ":" will be received as
   * input to the transform method. from this we can return the data in the
   * form that we want
   */
  transform(mediaItems: any): any {
    const categories = [];
    mediaItems.forEach((element) => {
      if (categories.indexOf(element.category) <= -1) {
        categories.push(element.category);
      }
    });
    return categories.join(', ');
  }
}
