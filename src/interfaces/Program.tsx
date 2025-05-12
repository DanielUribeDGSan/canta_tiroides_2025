export interface HttpProgram {
  res: boolean;
  programa: Programam[];
}

export interface Programam {
  id: number;
  fecha: Date;
  imagen: string;
  idioma: number;
  activo: number;
  created_at: Date;
  updated_at: Date;
}
