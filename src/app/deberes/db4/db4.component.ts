import { Component } from '@angular/core';

@Component({
  selector: 'app-db4',
  standalone: false,
  
  templateUrl: './db4.component.html',
  styleUrl: './db4.component.css'
})
export class Db4Component {
  visibleForm: number | null = null; 
  form1Data = { name: '' };
  form2Data = { email: '' };
  form3Data = { phone: '' };

  toggleForm(formNumber: number) {
    this.visibleForm = this.visibleForm === formNumber ? null : formNumber;
  }

  onSubmit(formName: string) {
    console.log(`${formName} enviado:`);
    if (formName === 'Formulario 1') {
      console.log(this.form1Data);
    } else if (formName === 'Formulario 2') {
      console.log(this.form2Data);
    } else if (formName === 'Formulario 3') {
      console.log(this.form3Data);
    }
  }
}

