import { Component } from '@angular/core';
import { GifsModule } from 'src/app/gifs/gifs.module';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gisfsService: GifsService){}
    
    get historial(){
      return this.gisfsService.historial;
    
    }
    buscar(valor: string){
      this.gisfsService.buscarGifs(valor);
    }
}
