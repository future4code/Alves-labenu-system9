import { BaseError } from "./BaseError";

export class EmailJaCadastrado extends BaseError {
    constructor(){
        super ("Email já existe no banco de dados", 401)
    }
}