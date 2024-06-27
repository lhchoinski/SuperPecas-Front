import {ICarro} from "./ICarro";

export interface IPeca {
  id: number | null;
  nome: string;
  descricao:string;
  serial_number:string;
  fabricante: string;
  carro: ICarro
}
