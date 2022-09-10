import { Request, Response } from "express";
import { TurmaData } from "../Data/TurmaData";
import { Turma } from "../model/Turma";

export class TurmaEndpoint {
    //CRIAR TURMA
    async create(req:Request, res: Response) {
       try {
        const {nome} = req.body

        const turma = new Turma(nome)
        const turmaData = new TurmaData()

        const response = await turmaData.criarTurma(turma)

        res.status(201).send({message: response})

       } catch (error) {
        console.log(error)
       }
    }

    //BUSCAR TURMAS ATIVAS
    async ativa(req: Request, res: Response){
        try {
            const turmaData = new TurmaData()

            const turmasAtivas = await turmaData.turmasAtivas()

            res.status(201).send({message: turmasAtivas})
 
        } catch (error) {
         console.log(error)
        }
    }

    //DEFINIR MODULO
    async modificaModulo(req: Request, res: Response){
        try {
            const {id, modulo} = req.body
            const turmaData = new TurmaData()

            const moduloRedefinido = await turmaData.definirModulo(id, modulo)

            res.status(201).send({message: moduloRedefinido})
 
        } catch (error) {
         console.log(error)
        }
     }



}