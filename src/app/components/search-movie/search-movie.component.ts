import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { isRequiredValidator } from 'src/app/validators/is-required.validator';
import { rangeDateValidator } from 'src/app/validators/range-date.validator';
import { SearchFormModel } from 'src/app/models/searchform.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  types = [
    { label: 'Film', value: 'film' },
    { label: 'Series', value: 'series' },
    { label: 'Episode', value: 'episode' },
  ];

  options = [
    { label: 'complete', value: 'complete' },
    { label: 'short', value: 'short' },
  ];

  searchForm = this.fb.group({
    name: this.fb.group({
      identifier: [''],
      title: ['']
    },
      { validators: isRequiredValidator('identifier', 'title') }
    ),
    year: [NaN],
    type: ['series'],
    selectedOptions: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.searchForm.patchValue({
      selectedOptions: 'short',
    });

    this.searchForm.valueChanges
      .subscribe(value => {
        console.log('searchForm value changes : ', value);
      });

    this.name.get('identifier')?.valueChanges.subscribe(() => {
      this.disableSelectList();
    });

    this.disableSelectList();

    const minYear = new Date(1900, 0, 1);
    const maxYear = new Date();
    this.searchForm.get('year')?.setValidators(rangeDateValidator(minYear, maxYear));
    this.searchForm.get('year')?.updateValueAndValidity();
  }

  get name(): FormGroup {
    return this.searchForm.get('name') as FormGroup;
  }

  private disableSelectList(): void {
    const identifierControl = this.searchForm.get('name.identifier');
    const selectListControl = this.searchForm.get('selectedOptions');

    if (identifierControl && selectListControl) {
      if (identifierControl.value) {
        selectListControl.enable();
      } else {
        selectListControl.disable();
      }
    }
  }

  onSubmit() {
    const formData: SearchFormModel = this.searchForm.value as SearchFormModel;
    console.log('searchForm submitted : ', this.searchForm.value);
  }
}
