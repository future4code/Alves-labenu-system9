export abstract class Usuario {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private dataNasc: Date,
    private turmaId: string
  ) {}

  getidUsuario() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getDataNasc() {
    return this.dataNasc;
  }
  getTurmaId() {
    return this.turmaId;
  }
  setidUsuario() {
    return this.id;
  }
  setName() {
    return this.name;
  }
  setEmail() {
    return this.email;
  }
  setDataNasc() {
    return this.dataNasc;
  }
  setTurmaId() {
    return this.turmaId;
  }
}
