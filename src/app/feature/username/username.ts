import {Permission} from "../permission/permission";

export interface Username{
  usernameId: number,
  name:string,
  email:string ,
  password:string,
  enabled:boolean,
  personId:number,
  permissions:Permission[]
}
