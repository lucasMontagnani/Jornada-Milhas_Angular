import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
// This service acts as a form manager, allowing different components to share access to the same form
    // A component can set a form using setCadastro(form: FormGroup).
    // Later, any other component (or the same one) can retrieve this form using getCadastro().
export class FormularioService {
  // A FormGroup represents a group of controls (inputs) in a form, and it can track their values, validation statuses, and states
  cadastroForm: FormGroup | null = null;

  // This pattern is useful when you need to manage a form across different components or maintain form state even when switching between views

  // This is useful when you want to retrieve the form from another component or part of the app.
  getFormulario(): FormGroup | null {
    return this.cadastroForm;
  }

  // This method sets the cadastroForm to a provided FormGroup object. It allows any component to save the form in this service for later use.
  setFormulario(form: FormGroup) {
    this.cadastroForm = form;
  }
}
