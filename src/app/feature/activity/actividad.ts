import { DiaFestivo } from '../holiday/holiday';

export interface Actividad {
  actividadId: number;
  nombre: string;
  categoria: string;
  created: Date;
  updated: Date;
  archivate: boolean;
  enabled: boolean;
  categoriaActividadId: number;
  diasFestivos: DiaFestivo[];
}
