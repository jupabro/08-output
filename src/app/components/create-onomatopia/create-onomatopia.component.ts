import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      newOnomatopia: ['', Validators.required]
    });
  }

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter

  createOnomatopia(): void {
    const newOnomatopiaValue = this.createForm.get('newOnomatopia')?.value;
    this.sendOnomatopiaToParent.emit(newOnomatopiaValue);
  }

}
