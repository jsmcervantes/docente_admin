import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';


import { UsernameFormComponent } from './username/form/username.form.component';
import { UsernameListComponent } from './username/list/username-list.component';
import { UsernameToolbarComponent } from './username/toolbar/username-toolbar.component';
import { PermissionFormComponent } from './permission/form/permission.form.component';
import { PermissionToolbarComponent } from './permission/toolbar/permission-toolbar.component';
import { PermissionListComponent } from './permission/list/permission-list.component';
import { RegistroFormComponent } from './registry/form/registry.form.component';
import { RegistroListComponent } from './registry/list/registry-list.component';
import { RegistroToolbarComponent } from './registry/toolbar/registry-toolbar.component';

import { UsernameComboboxComponent } from './username/username-combobox.component';
import { TipoPermisoComboboxComponent } from './typesPermission/typesPermission-combobox.component';
import { PersonComboboxComponent } from './person/person-combobox.component';
import { PersonListComponent } from './person/list/person-list.component';
import { PersonFormComponent } from './person/form/person.form.component';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { TiposPermisoFormComponent } from './typesPermission/form/typesPermission.form.component';
import { TiposPermisoListComponent } from './typesPermission/list/typesPermission-list.component';
import { TiposPermisoToolbarComponent } from './typesPermission/toolbar/typesPermission-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ComentarySearchComponent } from './comentary/comentary-search/comentary-search.component';
import { PermissionSearchComponent } from './permission/permission-search/permission-search.component';

//asistencia admin 

import { DiaFestivoFormComponent } from './holiday/form/holiday.form.component';
import { DiaFestivoListComponent } from './holiday/list/holiday-list.component';
import { DiaFestivoToolbarComponent } from './holiday/toolbar/holiday-toolbar.component';
import { CategoriaFormComponent } from './category/form/categoria.form.component';
import { CategoriaListComponent } from './category/list/categoria-list.component';
import { CategoriaToolbarComponent } from './category/toolbar/categoria-toolbar.component';
import { ActividadFormComponent } from './activity/form/actividad.form.component';
import { ActividadListComponent } from './activity/list/actividad-list.component';
import { ActividadToolbarComponent } from './activity/toolbar/actividad-toolbar.component';
import { RolesComponent } from './role/role-form/roles.component';
import { RolesListComponent } from './role/role-list/roles-list.component';
import { ToolbarRolesComponent } from './role/toolbar-role/toolbar-roles.component';
import { CategoriaComboboxComponent } from './category/category-combobox/categoria-combobox.component';
import { DiaFestivoSearchComponent } from './holiday/holidays-search/holiday-search.component';
import { RolComboboxComponent } from './role/rol-combobox.component';
import { ActividadSearchComponent } from './activity/activivity-search/actividad-search.component';
import { CategoriaSearchComponent } from './category/category-search/categoria-search.component';
import { ComboboxRolesComponent } from './holiday/combobox_role/combobox-roles.component';

TipoPermisoComboboxComponent


@NgModule({
  declarations: [
    PermissionFormComponent,
    PermissionToolbarComponent,
    PermissionListComponent,
    UsernameFormComponent,
    UsernameToolbarComponent,
    UsernameListComponent,
    RegistroFormComponent,
    RegistroListComponent,
    RegistroToolbarComponent,
    UsernameToolbarComponent,


    UsernameComboboxComponent,
    PersonComboboxComponent,
    PersonFormComponent,
    PersonListComponent,
    PersonToolbarComponent,
    TiposPermisoFormComponent,
    ComentarySearchComponent,
    PermissionSearchComponent,
    TiposPermisoListComponent,
    TiposPermisoToolbarComponent,
    TipoPermisoComboboxComponent,
    //admin
    DiaFestivoFormComponent,
    DiaFestivoListComponent,
    DiaFestivoToolbarComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    CategoriaToolbarComponent,
    RolesComponent,
    RolesListComponent,
    ToolbarRolesComponent,
    ActividadFormComponent,
    ActividadListComponent,
    ActividadToolbarComponent,    
    CategoriaComboboxComponent,
    DiaFestivoSearchComponent,
    RolComboboxComponent,
    ActividadSearchComponent,
    CategoriaSearchComponent,
    ComboboxRolesComponent,
    PersonFormComponent,


  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
