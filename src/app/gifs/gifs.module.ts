import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { MostradorComponent } from './mostrador/mostrador.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    MostradorComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GifsPageComponent]
})
export class GifsModule { }
