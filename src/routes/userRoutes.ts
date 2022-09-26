import { Router } from 'express';

class UserRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    public config() : void {
        this.router.get('/',(req,res) => res.send('Estoy vivo'));
    }
}

const userRoutes : UserRoutes=new UserRoutes();
export default userRoutes.router;