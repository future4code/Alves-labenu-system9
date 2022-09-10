import { Request, Response } from "express";
import { EstudanteData } from "../Data/EstudanteData";
import { Estudante } from "../model/Estudante";

export class EstudanteEndpoint {
    //CRIAR ALUNO
    async create(req:Request, res: Response) {
       try {
        const {nome, email, dataNasc, turmaId} = req.body

        if(!nome || !email || !dataNasc || !turmaId) {
            throw new Error("Dados requeridos incompletos, você deve preencher todos os campos");  
        }
        
        const [day, month, year] = dataNasc.split('/')
        const dateOfBirth: Date = new Date (`${year}-${month}-${day}`)

        const estudante = new Estudante(nome, email, dateOfBirth, turmaId)

        const estudanteData = new EstudanteData()

        const response = await estudanteData.criarEstudante(estudante)

        res.status(201).send({message: response})
       } catch (error) {
        
       }
    }

    //BUSCAR USUARIO
    async search(req: Request, res: Response){
        try {
            const {nome} = req.body

            const estudanteData = new EstudanteData()

            const estudantePorNome = await estudanteData.busca(nome)

            res.status(201).send({message: estudantePorNome})
 
        } catch (error) {
         console.log(error)
        }
    }
}