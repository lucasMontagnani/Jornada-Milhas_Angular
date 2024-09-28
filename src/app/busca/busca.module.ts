import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { BuscaComponent } from "./busca.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { BuscaRoutingModule } from "./busca-routing.module";

@NgModule({
    declarations: [
      BuscaComponent,
      FiltrosComplementaresComponent,
      LabelComponent,
      CompanhiasComponent,
      PrecosComponent,
      ParadasComponent,
      PassagemComponent,
      PassagemDestaqueComponent
    ],
    imports: [
      CommonModule,
      MaterialModule,
      SharedModule,
      ReactiveFormsModule,
      BuscaRoutingModule
    ],
    exports: [
      BuscaComponent,
      FiltrosComplementaresComponent,
      LabelComponent,
      CompanhiasComponent,
      PrecosComponent,
      ParadasComponent,
      PassagemComponent,
      PassagemDestaqueComponent
    ]
  })
  export class BuscaModule { }