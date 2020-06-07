import { Router } from "express";
import { usuariosController } from "../controllers/usuariosController";

class UsuariosRoutes {
  public router: Router = Router();

  constructor() {
    this.configRoutes();
  }
  configRoutes(): void {
    this.router.get('/api/perfil', usuariosController.keySecrect, usuariosController.verificarToken, usuariosController.perfil,);
    this.router.post('/signup', usuariosController.keySecrect, usuariosController.signup);
    this.router.post('/signin', usuariosController.keySecrect, usuariosController.signin);
    this.router.get('/api/usuario', usuariosController.keySecrect, usuariosController.getUsuarios);
    this.router.get('/api/usuario/:id', usuariosController.keySecrect, usuariosController.verificarToken, usuariosController.getUsuario);
    this.router.post('/api/usuario', usuariosController.keySecrect, usuariosController.verificarToken, usuariosController.postUsuario);
    this.router.put('/api/usuario/:id', usuariosController.keySecrect, usuariosController.verificarToken, usuariosController.permisoAdmin, usuariosController.putUsuario);
    this.router.delete('/api/usuario/:id', usuariosController.keySecrect, usuariosController.verificarToken, usuariosController.permisoAdmin, usuariosController.deleteUsuario);
  }
}
const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;