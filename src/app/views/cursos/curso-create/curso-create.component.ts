import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresListService, Usuario } from './graphql/profesores-list.service';
import { CursoCreateService, CursoCreateResponse } from './graphql/curso-create.service';


@Component({
  selector: 'app-curso-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './curso-create.component.html',
  styleUrl: './curso-create.component.css'
})
export class CursoCreateComponent implements OnInit {

  cursoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFinal: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    profesorId: new FormControl('', Validators.required)
  })

  profesores: Usuario[] = [];

  constructor(private profesoresListService: ProfesoresListService, private cursoCreateService: CursoCreateService) { }


  ngOnInit(): void {
    this.profesoresListService.fetch(
      { },
      {
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      }
    ).subscribe(({data}) => {
      this.profesores = data.usuarios.filter(user =>
        user.roles.some(role => role.nombre === "PROFESOR")
      );
      console.log(this.profesores);
    });
  }


  onSubmit(): void {
    this.cursoCreateService.mutate({
      nombre: this.cursoForm.value.nombre,
      descripcion: this.cursoForm.value.descripcion,
      fechaInicio: this.cursoForm.value.fechaInicio,
      fechaFinal: this.cursoForm.value.fechaFinal,
      precio: this.cursoForm.value.precio,
      profesorId: this.cursoForm.value.profesorId
    },
    {
      context: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    }).subscribe(({data})=>{
      const loginResponse = data as CursoCreateResponse;
      console.log(loginResponse);
    })
  }

}
