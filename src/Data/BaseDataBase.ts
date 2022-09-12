import knex, { Knex } from "knex"
import dotenv from "dotenv"

dotenv.config()


 abstract class BaseDataBase {

 
    private static connetion: Knex | null = null;

    protected getConnetion():Knex {
    
        if (!BaseDataBase.connetion) {
            BaseDataBase.connetion = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_DATABASE,
                    password: process.env.DB_PASSWORD,
                    port: 3306
                }
            })
        }

        return BaseDataBase.connetion
    }
}
export default BaseDataBase