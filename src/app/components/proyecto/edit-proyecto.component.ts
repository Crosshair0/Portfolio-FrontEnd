import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto : Proyecto = null;

  constructor(private activatedRoute: ActivatedRoute, private proyectoService:ProyectoService,private router:Router, public imageService: ImageService){}

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
      this.proyectoService.detail(id).subscribe(
        data => {
          this.proyecto = data;

        }, err => {
          alert("Error al modificar la persona");
          this.router.navigate([''])
        }
      )
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id,this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);

      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )

  }
}
