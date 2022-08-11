import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';


import { UsernameFormComponent } from './username/form/username.form.component';
import { UsernameListComponent } from './username/list/username-list.component';
import { UsernameToolbarComponent } from './username/toolbar/username-toolbar.component';
import { PermissionFormComponent } from './permission/form/permission.form.component';
import { PermissionToolbarComponent } from './permission/toolbar/permission-toolbar.component';
import { PermissionListComponent } from './permission/list/permission-list.component';
import { RegistroFormComponent } from './registro/form/registro.form.component';
import { RegistroListComponent } from './registro/list/registro-list.component';
import { RegistroToolbarComponent } from './registro/toolbar/registro-toolbar.component';

import { UsernameComboboxComponent } from './username/username-combobox.component';
import { TipoPermisoComboboxComponent } from './tiposPermiso/tipoPermiso-combobox.component';
import { PersonComboboxComponent } from './person/person-combobox.component';
import { PersonListComponent } from './person/list/person-list.component';
import { PersonFormComponent } from './person/form/person.form.component';
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { TiposPermisoFormComponent } from './tiposPermiso/form/tiposPermiso.form.component';
import { TiposPermisoListComponent } from './tiposPermiso/list/tiposPermiso-list.component';
import { TiposPermisoToolbarComponent } from './tiposPermiso/toolbar/tiposPermiso-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ComentarySearchComponent } from './comentary/comentary-search/comentary-search.component';
import { PermissionSearchComponent } from './permission/permission-search/permission-search.component';

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
    TipoPermisoComboboxComponent


  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
