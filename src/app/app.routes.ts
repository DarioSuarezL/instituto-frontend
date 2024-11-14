import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { CursosComponent } from './views/cursos/cursos.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'cursos',
                component: CursosComponent
            }
        ]
    }
];
