import { Component, OnInit } from '@angular/core';
import { Curso, CursosListService } from './graphql/cursos-list.service';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.css'
})
export class CursosListComponent implements OnInit {

  cursos: Curso[] = [];
  
  constructor(private cursosListService: CursosListService) {}

  ngOnInit(): void {
    this.cursosListService.fetch(
      { },
      {
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      }
    ).subscribe(({data}) => {
      this.cursos = data.cursos;
    });
  }

}
