import { Comentary } from "../comentary/comentary";

export interface Registro{
  registroId: number,
  usuario: string,
  comentario: string,
  created: Date,
  activity:number,
  enabled: boolean,
  usernameId:number,
  comentaries: Comentary[]
}
