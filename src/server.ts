
import * as express from 'express';
import * as mongoose from 'mongoose';
import { getEnviromentVariables } from './enviroments/enviroment';
import UserRouter from './routers/UserRouter';


export class Server {

    public app: express.Application = express();

    constructor() {
        this.setConfigs();
        this.setRoutes();
    }

    setConfigs() {
        this.connectMongoDB();
    }

    connectMongoDB() {
        mongoose.connect(getEnviromentVariables().db_uri)
            .then(() => {
                console.log('Connected to mongodb');
            });

    }

    setRoutes() {
        this.app.use('/api/user', UserRouter)
    }

};