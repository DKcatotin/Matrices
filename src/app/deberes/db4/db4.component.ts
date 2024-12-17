import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-db4',
  templateUrl: './db4.component.html',
})
export class Db4Component {
  form: FormGroup;
  dropdownOptions = [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' },
    { label: 'Opción 4', value: '4' },
  ];
  submitted = false;
  selectedForm: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputText: ['', Validators.required],
      dropdown: [null, Validators.required],
      multiSelect: [[], Validators.required],
      calendar: [null, Validators.required],
      switch: [false],
      gender: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  showForm(formId: number) {
    this.selectedForm = formId;
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      // Aquí puedes manejar los datos del formulario
      console.log(this.form.value);
      // Luego de enviar el formulario, puedes limpiar el formulario:
      this.form.reset();
    }
  }
}
