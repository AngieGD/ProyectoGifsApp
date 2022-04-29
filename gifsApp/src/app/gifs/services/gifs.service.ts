import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'//Esto indica que este servicio será unico y global
})
export class GifsService {

  private apiKey      : string = '5kAMNGJSuYCkXgxztK5gHg8955EA98eo';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = []


  public resultados:Gif[] = []

  /**
   * @function Retorna los valores del historial
   */
  get historial(){

    return [...this._historial];  //Recuerda romper referencia 
  }

  constructor(private http : HttpClient){ //Inyectar modulo
    this._historial = JSON.parse(localStorage.getItem('historial')!)  || []
    this.resultados = JSON.parse(localStorage.getItem('imagenes')!)  || []

  }
/**
 * @function recibe la nueva palabra y la agrega al historial 
 * @param query nueva palabra del historial
 */
  buscargifs (query:string){
    
    query = query.trim().toLocaleLowerCase()

    
    if(!this._historial.includes(query)){
      this._historial.unshift(query)  
      this._historial = this._historial.slice(0,12) //con esto hago que me muestre solo los primeros 12 
      localStorage.setItem('historial' , JSON.stringify(this.historial)) //almacenar busquedas
      

       
         
    }

     const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit' , '10')
          .set('q' , query)

      console.log(params.toString())          
    
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params}) //El  get es generico, entonces le pondremos el tipo desde ahí 
        .subscribe((response)=>{
          console.log(response.data)
          this.resultados = response.data
          console.log(this.resultados)
          localStorage.setItem('imagenes' , JSON.stringify(this.resultados))          
          
        });

  }
}
