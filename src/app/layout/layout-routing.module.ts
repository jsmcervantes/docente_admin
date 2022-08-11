import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionFormComponent } from '../feature/permission/form/permission.form.component';
import { PermissionListComponent } from '../feature/permission/list/permission-list.component';
import { PersonFormComponent } from '../feature/person/form/person.form.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
import { RegistroFormComponent } from '../feature/registry/form/registry.form.component';
import { RegistroListComponent } from '../feature/registry/list/registry-list.component';
import { TiposPermisoFormComponent } from '../feature/typesPermission/form/typesPermission.form.component';
import { TiposPermisoListComponent } from '../feature/typesPermission/list/typesPermission-list.component';
import { UsernameFormComponent } from '../feature/username/form/username.form.component';
import { UsernameListComponent } from '../feature/username/list/username-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
//admin
import { DiaFestivoFormComponent } from '../feature/holiday/form/holiday.form.component';
import { DiaFestivoListComponent } from '../feature/holiday/list/holiday-list.component';
import { CategoriaFormComponent } from '../feature/category/form/categoria.form.component';
import { CategoriaListComponent } from '../feature/category/list/categoria-list.component';
import { ActividadFormComponent } from '../feature/activity/form/actividad.form.component';
import { ActividadListComponent } from '../feature/activity/list/actividad-list.component';
import { RolesListComponent } from '../feature/role/role-list/roles-list.component';
import { RolesComponent } from '../feature/role/role-form/roles.component';

const routes: Routes = [
  {path: '' , component: MainComponent,
    children: [
        { path: '', component:DashboardComponent},

        {path:'registro-form', component:RegistroFormComponent},
        {path:'registro-form/:id', component:RegistroFormComponent},
        {path:'registro-list', component:RegistroListComponent},
        {path:'username-form', component:UsernameFormComponent},
        {path:'username-form/:id', component:UsernameFormComponent},
        {path:'username-list', component:UsernameListComponent},
        {path:'person-form', component:PersonFormComponent},
        {path:'person-form/:id', component:PersonFormComponent},
        {path:'person-list', component:PersonListComponent},
        {path:'tiposPermiso-form', component:TiposPermisoFormComponent},
        {path:'tiposPermiso-list', component:TiposPermisoListComponent},
        {path:'tiposPermiso-form/:id', component:TiposPermisoFormComponent},
        {path:'permission-form', component:PermissionFormComponent},
        {path:'permission-list', component:PermissionListComponent},
        {path:'permission-form/:id', component:PermissionFormComponent},
        {path:'dashboard', component:DashboardComponent},
        //admin
        { path: 'diaFestivo-form', component: DiaFestivoFormComponent },
        { path: 'diaFestivo-form/:id', component: DiaFestivoFormComponent },
        { path: 'diaFestivo-list', component: DiaFestivoListComponent },
        { path: 'categoria-form', component: CategoriaFormComponent },
        { path: 'categoria-form/:id', component: CategoriaFormComponent },
        { path: 'categoria-list', component: CategoriaListComponent },
        { path: 'dashboard', component: DashboardComponent },
        {path: 'roles-form', component: RolesComponent,},
        {path: 'roles-form/:id', component: RolesComponent,},
        {path: 'roles-list', component: RolesListComponent,},
        { path: 'actividad-form', component: ActividadFormComponent },
        { path: 'actividad-form/:id', component: ActividadFormComponent },
        { path: 'actividad-list', component: ActividadListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
