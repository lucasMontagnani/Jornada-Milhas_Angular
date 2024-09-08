import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  titulo = 'Olá, ';
  buttonText = 'ATUALIZAR';

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null; 

  constructor(
    private tokenService: TokenService, 
    private cadastroService: CadastroService, 
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    // Get the data from a perfil and saves it in the this.cadastra that will be further used by carregarFormulario() to fetch the data on the form
    this.cadastroService.buscarCadastro(/*this.token*/).subscribe(cadastro => {
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }

  carregarFormulario() {
    // Gets the FormGroup from the form-base.component and save it at the this.form
    this.form = this.formularioService.getFormulario();
    // It accepts an object with control names as keys (Like FormGroup), and does its best to match the values to the correct controls in the group.
    this.form?.patchValue({
        nome: this.cadastro.nome,
        nascimento: this.cadastro.nascimento,
        cpf: this.cadastro.cpf,
        telefone: this.cadastro.telefone, email: this.cadastro.email,
        senha: this.cadastro.senha,
        cidade: this.cadastro.cidade,
        estado: this.cadastro.estado,
        genero: this.cadastro.genero
    })
  }

  atualizar() {
    // Get the current data state of the this.form and save in one const to be passed to editarCadastro()
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    };

    this.cadastroService.editarCadastro(dadosAtualizados, /*this.token*/).subscribe({
      next: () => {
          alert('Cadastro editado com sucesso')
          this.router.navigate(['/']);
      },
      error: (err) => {
          console.log(err)
      }
    })
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
