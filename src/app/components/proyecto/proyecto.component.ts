import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos : Proyecto[] = [];

  constructor(public proyectosService: ProyectoService,private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    }
  
    cargarProyectos(): void {
      this.proyectosService.lista().subscribe(
        data => {
          this.proyectos = data;
  
        }
      )
    }
    delete(id: number){
      if(id != undefined){
        this.proyectosService.delete(id).subscribe(
          data => {
            this.cargarProyectos();
  
          }, err => {
            alert("No se ha logrado borrar la habilidad");
          }
        )
      }
    }
}
