import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionFormComponent } from '../feature/permission/form/permission.form.component';
import { PermissionListComponent } from '../feature/permission/list/permission-list.component';
import { PersonFormComponent } from '../feature/person/form/person.form.component';
import { PersonListComponent } from '../feature/person/list/person-list.component';
import { RegistroFormComponent } from '../feature/registro/form/registro.form.component';
import { RegistroListComponent } from '../feature/registro/list/registro-list.component';
import { TiposPermisoFormComponent } from '../feature/tiposPermiso/form/tiposPermiso.form.component';
import { TiposPermisoListComponent } from '../feature/tiposPermiso/list/tiposPermiso-list.component';
import { UsernameFormComponent } from '../feature/username/form/username.form.component';
import { UsernameListComponent } from '../feature/username/list/username-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
