import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clima } from '../interfaces/clima-interface';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  urlLocation : string = " https://weatherdbi.herokuapp.com/data/weather";
  urlUbication : string ="https://weatherdbi.herokuapp.com/data/weather"
  constructor(
    private http : HttpClient
  ) { }

  

  
  getLocation(ubicacion : string) : Observable<Clima>{
 
    const url = `${ this.urlLocation }/${ubicacion}`;
    return this.http.get<Clima>( url ); 

  }

  getUbicacion(lat : any , long : any) : Observable<Clima>{
    
    const url = `${ this.urlLocation }/${lat},/${long}`;
    return this.http.get<Clima>( url ); 
  }
  
}
