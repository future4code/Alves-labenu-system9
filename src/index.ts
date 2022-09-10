import { app } from "./app";
import { EstudanteEndpoint } from "./Endpoints/EstudanteEndpoint";
import { TurmaEndpoint } from "./Endpoints/TurmaEndpoint";

//TURMA
const turma = new TurmaEndpoint()
app.post("/turma", turma.create)

app.get("/turmas-ativas", turma.ativa)

app.post("/define-modulo", turma.modificaModulo)

//ESTUDANTE
const estudante = new EstudanteEndpoint()
app.post("/estudante", estudante.create)

app.get("/estudante", estudante.search)

app.post("/docente")

app.put("/estudante")

app.put("/docente")

app.get("/idade/:id")

app.get("/turmas")

app.put("/turmas/modulo")

app.get("/estudante/:name")

app.put("/estudante/turma")

app.get("/docentes")

app.put("/docente/turma")