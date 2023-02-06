import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLab } from '../models/experiencia-lab';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://backendafp.onrender.com/explab/'


  constructor(private httpClient: HttpClient) { }
    public lista(): Observable<ExperienciaLab[]>{

      return this.httpClient.get<ExperienciaLab[]>(this.expURL + 'lista');
       
  }

  public detail(id:number): Observable<ExperienciaLab>{
    return this.httpClient.get<ExperienciaLab>(this.expURL + "detail"  + "/"  + id);
  }

  public save(experienciaLab:ExperienciaLab): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `create`, experienciaLab);
  }

  public update(id:number, experimentLab:ExperienciaLab): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experimentLab);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + "delete" + "/" + id);
  }
}
