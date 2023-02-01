import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/models/experiencia-lab';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe : ExperienciaLab[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService	) {}

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;

    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }


  delete(id?: number){
    if(id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        },err => {
          alert("No se ha podido borrar la experiencia mencionada");
        }
        )
    }
  }
}


