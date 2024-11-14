import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

export interface CursoCreateResponse {
  crearCurso: CrearCurso;
}

export interface CrearCurso {
  id:          string;
  nombre:      string;
  descripcion: string;
  fechaInicio: Date;
  fechaFinal:  Date;
  precio:      number;
  profesor:    Profesor;
}

export interface Profesor {
  id:       string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursoCreateService extends Mutation {

  document = gql`
  mutation crearCurso(
    $nombre: String!,
    $descripcion: String!,
    $fechaInicio: String!,
    $fechaFinal: String!,
    $precio: Float!,
    $profesorId: ID!
  ) {
    crearCurso(
      nombre: $nombre,
      descripcion: $descripcion,
      fechaInicio: $fechaInicio,
      fechaFinal: $fechaFinal,
      precio: $precio,
      profesorId: $profesorId
    ) {
      id
      nombre
      descripcion
      fechaInicio
      fechaFinal
      precio
      profesor {
        id
        username
      }
    }
  }
`;

}
