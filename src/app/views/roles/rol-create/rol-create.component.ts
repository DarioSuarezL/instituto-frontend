import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { RolCreateService, RolCreateResponse } from './graphql/rol-create.service';


@Component({
  selector: 'app-rol-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rol-create.component.html',
  styleUrl: './rol-create.component.css'
})
export class RolCreateComponent {

  permisos = ["Crear", "Leer", "Actualizar", "Eliminar"];

  rolForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    // permisos: new FormArray(this.permisos.map((permiso) => new FormControl(false)))
  })

  constructor(){}

  onSubmit(): void{
    console.log(this.rolForm.value);
  }

  // get permisosArray(){
  //   return this.rolForm.get('permisos') as FormArray;
  // }

  // obtenerSeleccionados() {
  //   if(this.rolForm.value.permisos){
  //     return [];
  //   }
  //   const seleccionados = this.rolForm.value.permisos!
  //     .map((seleccionado, i) => (seleccionado ? this.permisos[i] : null))
  //     .filter(valor => valor !== null);
  //   console.log(seleccionados);
  //   return seleccionados;
  // }

}
