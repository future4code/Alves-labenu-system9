import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
  constructor(
    id: string,
    name: string,
    email: string,
    dataNasc: Date,
    turmaId: string
  ) {
    super(id, name, email, dataNasc, turmaId);
  }
}
