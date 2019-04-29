import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  log: string;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      phone: [null, Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.log = this.form.valid ? `Called : ${this.form.value.phone}` : 'Phone number is invalid';
  }

}
