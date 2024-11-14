import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface CursosListResponse {
  cursos: Curso[];
}

export interface Curso {
  id:          string;
  nombre:      string;
  descripcion: string;
  fechaInicio: Date;
  fechaFinal:  Date;
  precio:      number;
}

@Injectable({
  providedIn: 'root'
})
export class CursosListService extends Query<CursosListResponse>{

  document = gql`
    query {
      cursos {
        id
        nombre
        descripcion
        fechaInicio
        fechaFinal
        precio
      }
    }
  `;

}
