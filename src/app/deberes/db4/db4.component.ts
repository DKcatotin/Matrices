import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-db4',
  standalone: false,
  
  templateUrl: './db4.component.html',
  styleUrl: './db4.component.css',
 
})

export class Db4Component {
  form: FormGroup;
  dropdownOptions = [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' },
  ];
  radioOptions = ['Opción A', 'Opción B', 'Opción C'];

  constructor(private fb: FormBuilder, private http: HttpClient) {  // Inyecta HttpClient aquí
    this.form = this.fb.group({
      inputText: [''],
      inputNumber: [null],
      dropdown: [null],
      multiSelect: [[], Validators.required],
      calendar: [null],
      checkbox: [false],
      radio: [null],
      switch: [false],
      textarea: [''],
      fileUpload: [null],
      name: [''],
      email: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);

    // Ejemplo de uso de HttpClient para hacer una solicitud GET
    this.http.get('https://api.example.com/data')
      .subscribe(response => {
        console.log('Respuesta de la API:', response);
      });
  }
}
  


