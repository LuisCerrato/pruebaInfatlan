import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-verclima',
  templateUrl: './verclima.component.html',
  styleUrls: ['./verclima.component.css']
})
export class VerclimaComponent implements OnInit {

  info : any;
  hayError : any;
  termino : string = '';
  clima : any;
  climaubicacion: any;
  constructor(
    private climaServices : ClimaService
  ) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    

    this.climaServices.getLocation(this.termino).subscribe(
      resp => {
        console.log(resp.next_days)
        this.info = resp.next_days;

      }
    )

    
    
  }

 
  obtenerClimaPorUbicacion(){

    let lat ='';
    let long = '';
    this.climaServices.getUbicacion(lat,long).subscribe(
      resp => {
        this.climaubicacion = resp;
      }
    )
  }
  
    

}
