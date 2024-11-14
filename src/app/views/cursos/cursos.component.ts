import { Component } from '@angular/core';
import { CursosListComponent } from "./cursos-list/cursos-list.component";
import { CursoCreateComponent } from "./curso-create/curso-create.component";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CursosListComponent, CursoCreateComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

}
