import { Comentary } from "../comentary/comentary";

export interface Permission {
  permissionId : number,
  namePermission : number,
  description : string,
  dateSince : Date,
  dateUntil : Date,
  tipoPermisoId : number,
  enabled: boolean,
  comentaries: Comentary[]
}
