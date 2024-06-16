import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  // Injetando servico MatDialog no construtor
  constructor(public dialog: MatDialog) {}

  // Função que irá abrir o Modal, a qual será acionada por uma chamada no HTML
  openDialog() {
    // Passar como parametro o Component do Modal que deseja abrir 
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
