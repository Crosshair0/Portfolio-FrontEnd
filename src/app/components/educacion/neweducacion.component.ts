import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css'],
})
export class NeweducacionComponent {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('La Educacion fue añadida correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Ha ocurrido un error al añadir educacion');
        this.router.navigate(['']);
      }
    );
  }
}
