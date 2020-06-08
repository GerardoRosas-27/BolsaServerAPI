import { Router } from "express";
import { bacantesC } from "../controllers/bacantesController";

class BacantesRoutes {
  public router: Router = Router();

  constructor() {
    this.configRoutes();
  }
  configRoutes(): void {
    this.router.get('/api/bacantes', bacantesC.getBacantes);
    this.router.post('/api/bacantes', bacantesC.postBacantes);
  }
}
export const bacantesR = new BacantesRoutes();
