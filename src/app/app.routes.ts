import { Routes } from '@angular/router';
import { ListPage } from './pages/list-page/list-page';
import { AddPage } from './pages/add-page/add-page';
import { EditPage } from './pages/edit-page/edit-page';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: 'list',
        component: ListPage
    },
    {
        path: 'add',
        component: AddPage
    },
    {
        path: 'edit/:id',
        component: EditPage
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    }
];
