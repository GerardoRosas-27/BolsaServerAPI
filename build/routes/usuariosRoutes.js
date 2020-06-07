"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configRoutes();
    }
    configRoutes() {
        this.router.get('/api/perfil', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.verificarToken, usuariosController_1.usuariosController.perfil);
        this.router.post('/signup', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.signup);
        this.router.post('/signin', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.signin);
        this.router.get('/api/usuario', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.getUsuarios);
        this.router.get('/api/usuario/:id', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.verificarToken, usuariosController_1.usuariosController.getUsuario);
        this.router.post('/api/usuario', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.verificarToken, usuariosController_1.usuariosController.postUsuario);
        this.router.put('/api/usuario/:id', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.verificarToken, usuariosController_1.usuariosController.permisoAdmin, usuariosController_1.usuariosController.putUsuario);
        this.router.delete('/api/usuario/:id', usuariosController_1.usuariosController.keySecrect, usuariosController_1.usuariosController.verificarToken, usuariosController_1.usuariosController.permisoAdmin, usuariosController_1.usuariosController.deleteUsuario);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
