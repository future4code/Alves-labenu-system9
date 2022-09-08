import { Request, Response } from "express";

class EstudanteController {
    async createEstudante(req:Request, res: Response) {
       try {
        const {id, nome, email, dataNasc, turmaId} = req.body

        if(!id || !nome || !email || !dataNasc || !turmaId) {
            throw new Error("Dados requeridos incompletos, você deve preencher todos os campos");
            
            // const estudante 
        }
       } catch (error) {
        
       }
    }
}