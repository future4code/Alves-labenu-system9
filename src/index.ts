import { DocenteEndpoint } from './Endpoints/DocenteEndpoint';
import { app } from "./app";

import { EstudanteEndpoint } from "./Endpoints/EstudanteEndpoint";
import { TurmaEndpoint } from "./Endpoints/TurmaEndpoint";

//TURMA
const turma = new TurmaEndpoint();
const estudante = new EstudanteEndpoint();
const docente = new DocenteEndpoint();

app.post("/turma", turma.create);

app.get("/turma-ativa", turma.ativa);

app.post("/define-modulo/:id", turma.modificaModulo);

app.post("/estudante", estudante.create);

app.get("/estudante", estudante.search);

app.put("/estudante/mudaTurma", estudante.mudarTurma);

app.post("/docente", docente.create);

app.put("/docente", docente.search);

app.post("/docente/mudarTurma", docente.mudarTurma)

