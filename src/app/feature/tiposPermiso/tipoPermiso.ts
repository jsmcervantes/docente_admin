import { Permission } from "../permission/permission";

export interface TiposPermiso{
    tiposPermisoId: number,
    nombre:string,
    fecha:Date,
    created:Date,
    usernameId:number,
    enabled:boolean,
    permissions: Permission[]
  }