import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

export interface RolCreateResponse {
  crearRol: CrearRol;
}

export interface CrearRol {
  id:       string;
  nombre:   string;
  permisos: Permiso[];
}

export interface Permiso {
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class RolCreateService extends Mutation {

  document = gql`
  mutation crearRol($nombre: String!, $permisos: [String!]!) {
    crearRol(nombre: $nombre, permisos: $permisos) {
      id
      nombre
      permisos {
        nombre
      }
    }
  }
`;

}
