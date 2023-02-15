import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  id?:number;
  nombreP: string = '';
  descripcionP: string = '';
  img:string = '';
  urlP:string = '';

  constructor(
    private proyectosService: ProyectoService,
    private router: Router,
    private activatedRoute: ActivatedRoute, public imageService: ImageService
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.img, this.urlP);
    this.proyectosService.save(proyecto).subscribe({
      next: data => {
        alert('Proyecto añadida');
        this.router.navigate(['']);
      },
      error: err => {
        alert('Ha ocurrido un error al añadir el proyecto');
        this.router.navigate(['']);
      }
    });
    
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }
}



