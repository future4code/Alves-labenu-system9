import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("todos os campos devem ser preenchidos", 404)
    }
}