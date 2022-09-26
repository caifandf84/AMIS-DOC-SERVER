import { Router } from 'express';
import { indexController} from '../controllers/indexController';

class IndexRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    public config() : void {
        this.router.get('/',indexController.index);
        this.router.get('/test',indexController.test);
    }
}

const indexRoutes : IndexRoutes=new IndexRoutes();
export default indexRoutes.router;
