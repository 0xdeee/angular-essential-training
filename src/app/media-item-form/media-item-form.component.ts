import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css'],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    /**
     * [9.b]
     * FormGroup object represents the entire form
     * FormControl object represents unique fields in form
     * these are property bound its value through template using [ngForm] & formControlName
     */
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      /**
       * [10.a]
       * We can add built-in basic validators to form field using the Validators class
       * we can also group multiple Validators to same field by using compose () and
       * passing all validators required in an array
       * as the use enter the data in these fields, angular will validate it and add ng-invalid class
       * to the markup (which can be used to display feedback to user)
       * by default, the form will be submittable even if invalid. so we have to explicitly -
       * valid property in form object and disable submit button if the form is not valid
       */
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+'),
        ])
      ),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
    });
  }

  /**
   * [10.b]
   * We can build custom validator functions that return null || object based on required validation
   * here im considering it valid if year is empty or year in exclusive range of 1900 to 2100
   * and considering it invalid if otherwise
   * we just have to pass a reference to this method in the form field's FormControl Object
   * all other working like, applying ng-valid & ng-invalid class will be handled by angular
   */
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    if (year <= 1900 || year >= 2100) {
      return { year: true };
    } else {
      return null;
    }
  }

  onSubmit(formData) {
    console.log(formData);
  }
}
