import { Request, Response, NextFunction } from "express";
import { bacantesModels } from "../models/bacantesModels"
import jwt from "jsonwebtoken";

class BacantesController {
    constructor(){

    }
    public async keySecrect(req: Request, res: Response, next: NextFunction) {
        try {
            req.body.keySecrect = "secretkeyBruster123";
            next();
            
        } catch (e) {
            //console.log(e)
            return res.status(401).send('Unauhtorized Request');
        }
    }

  

    public async getBacantes(req: Request, res: Response) {
        try {
            const result = await bacantesModels.select();
            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ "mensaje": "Error no se puede consultar las bacantes" });
        }
    }

   

    public async postBacantes(req: Request, res: Response) {
        console.log(req.body)
        const result = await bacantesModels.insert(req.body);
        console.log(result);
        if (result) {
            res.status(201).json({ "mensaje": "Los datos se registro" });
        } else {
            res.status(500).json({ "mensaje": "Error al registrar el usuario" });
        }
    }

 

   

    public async verificarToken(req: Request, res: Response, next: NextFunction) {
        try {
            const { keySecrect } = req.body;
            if (!req.headers.authorization) {
                return res.status(401).send('Unauhtorized Request');
            }
            let token = req.headers.authorization.split(' ')[1];
            if (token === 'null') {
                return res.status(401).send('Unauhtorized Request');
            }

            const payload: any = await jwt.verify(token, keySecrect);
            if (!payload) {
                return res.status(401).send('Unauhtorized Request');
            }
            console.log("token desifrado:");
            console.log(payload);
            req.body.userId = payload.id;
            console.log("id del usuario: " + req.body.userId);
            next();
        } catch (e) {
            //console.log(e)
            return res.status(401).send('Unauhtorized Request');
        }
    }

  
}
export const bacantesC = new BacantesController();