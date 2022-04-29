
import { Component } from "@angular/core"; //Para que sea un componente
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

    constructor(private gifService : GifsService){}
    
    get historial(){
        
        const valor:string[] = this.gifService.historial
        
        return valor
        
    }

    buscar( termino:string ){
        console.log(termino)
        this.gifService.buscargifs(termino)

    }
    //historiala:string[]  = this.historial()
}