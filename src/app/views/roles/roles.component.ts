import { Component } from '@angular/core';
import { RolesListComponent } from './roles-list/roles-list.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RolesListComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

}
