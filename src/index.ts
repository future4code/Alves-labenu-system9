import { app } from "./app";
import { TurmaEndpoint } from "./Endpoints/TurmaEndpoint";

const turma = new TurmaEndpoint()

app.post("/turma", turma.create)

app.get("/turma-ativa", turma.ativa)

app.post("/estudante")

app.post("/docente")

app.post("./turma")

app.put("/estudante")

app.put("/docente")

app.get("/idade/:id")

app.get("/turmas")

app.put("/turmas/modulo")

app.get("/estudante/:name")

app.put("/estudante/turma")

app.get("/docentes")

app.put("/docente/turma")