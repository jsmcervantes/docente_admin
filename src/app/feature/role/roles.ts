import { Person } from '../person/person';

export interface Rol {
  rolId: number;
  name: string;
  admin: boolean;
  created: Date;
  updated: Date;
  enabled: boolean;
  archived: boolean;
  categoriaActividadId: number;
  persons: Person[];
}
