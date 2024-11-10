import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'/list',pathMatch:'full'
    },
    {path:'list', component:ListComponent}
];