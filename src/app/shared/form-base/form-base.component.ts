import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  @Input() perfilComponent!: boolean;
  @Input() titulo = 'Crie sua conta';
  @Input() buttonText = 'Cadastrar';
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() sair: EventEmitter<void> = new EventEmitter<void>();

  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  
  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [null, [Validators.requiredTrue]]
    });

    if(this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators (null);
    } else {
      this.cadastroForm.get('aceitarTermos')?.setValidators ([Validators.requiredTrue]);
    }
    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setFormulario(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  //Código omitido

  deslogar(){
    this.sair.emit();
  }
}
