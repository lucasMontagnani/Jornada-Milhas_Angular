import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // O decorator INPUT() vai sinalizar para o Angular que essa é uma propriedade de entrada, que esses valores serão recebidos e injetados nesse componente.
  // É tilizado o decorador @Input() para definir que elas serão preenchidas pelo componente pai
  @Input() src = '';
  @Input() alt = '';
}
