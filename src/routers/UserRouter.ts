import { Router } from "express";

class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }

    getRoutes() {
        console.log('aaaaa');
        this.router.get('/login', (req, res) => {
            const data = [{ name: 'sukyss' }]
            res.status(200).send(data);
        });

        this.router.get('/test', (req, res, next) => {
            console.log('test');
            (req as any).msg = 'This is a test';
            next();
        }, (req, res) => {
            res.send((req as any).msg);
        });
    }
    postRoutes() {

    }
    patchRoutes() {

    }
    putRoutes() {

    }
    deleteRoutes() {

    }


}

export default new UserRouter().router;