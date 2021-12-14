import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(formData) {
    console.log(formData);
  }
}
