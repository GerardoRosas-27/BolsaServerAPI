"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuariosRoutes_1 = require("./routes/usuariosRoutes");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.start();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //-- middlewares de la cabecera
        this.app.use((req, res, next) => {
            // Dominio que tengan acceso (ej. 'http://example.com')
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Metodos de solicitud que deseas permitir
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            // Encabecedados que permites (ej. 'X-Requested-With,content-type')
            res.setHeader('Access-Control-Allow-Headers', '*');
            next();
        });
    }
    routes() {
        this.app.use('/', usuariosRoutes_1.usuariosR.router);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("aplicacion corriendo en el puerto: " + this.app.get('port'));
        });
    }
}
new Server();
