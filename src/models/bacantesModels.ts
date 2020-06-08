import pool from "../database";
import { Bacantes } from "./interfaces";
import { crud } from "./crud";
import { general } from "../generals/generals";



class BacantesModels {

    constructor() {

        crud.init("bacantes", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    async select(id?: string, nombre?: string) {
        let result: any;
        if (id) {
            result = await crud.select(id);
            console.log(result);
            return result;
        } else {
            if (nombre) {
                result = await crud.selectNombre("nombre", nombre);
                console.log(result);
                return result;
            }else{
                result = await crud.select();
                console.log(result);
                return result;
            }
        }
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    async insert(bacantes: Bacantes) {
        try {
            bacantes.id = await general.generaraID("bacantes", "id");
            console.log(bacantes.id);
            const result = await crud.insert(bacantes);
            console.log(result);
            if (result.affectedRows === 1) {
                return true
            } else {
                return false;
            }

        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    async update(id: number, bacantes: Bacantes) {
        try {
            const result = await crud.update(bacantes, id);
            console.log(result)
            if (result.affectedRows === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para eliminar un registro en la tabla usuario de la base de datos
    async delete(id: number) {
        try {
            const result = await crud.delete(id);
            console.log(result);
            if (result.affectedRows === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    }

}
export const bacantesModels = new BacantesModels();