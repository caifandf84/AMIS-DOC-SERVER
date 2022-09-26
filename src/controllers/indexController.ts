import { Request,Response } from "express";
import pool from '../database';

class IndexController{

    public index(req: Request, res: Response){
        res.send('Estoy vivo');
    }

    public async test(req: Request, res: Response): Promise<any> {
        await pool.then(async conn=>{
            const rows = await conn.query("select * from test");
            res.json(rows);
        });
    }

}

export const indexController = new IndexController();