import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors"; 
import usuariosRoutes from "./routes/usuariosRoutes";
class Server {
 
   public app: Application;
    constructor(){
       this.app = express();
       this.config();
       this.routes();
    }
    config(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(){
        this.app.use('/',usuariosRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log("aplicacion corriendo en el puerto: " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();