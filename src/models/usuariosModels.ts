import pool from "../database";
import { Usuarios } from "./interfaces";
import { crud } from "./crud";

class UsuariosModels {
    constructor(){
        crud.init("usuario", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    async select(id: number | undefined, correo: string | undefined) {
        if (id) {
            const result = await crud.select(id);
            console.log(result);
            return result;
        } else {
            if (correo) {
                const result = await crud.selectNombre("correo" , correo);
                console.log(result);
                return result;
            } else {
                const result = await crud.select();
                console.log(result);
                return result;
            }
        }
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    async insert(usuario: Usuarios) {
        try {
            const resultExiste = await crud.selectNombre("correo", usuario.correo);
            if (resultExiste.length === 0) {
                const result = await crud.insert(usuario);
                console.log(result.insertId);
                if (result.warningCount === 0) {
                    return result.insertId
                } else {
                    return false;
                }
            } else return false
        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    async update(id: number, usuario: Usuarios) {
        try {
            const result = await crud.update(usuario, id);
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
 export const usuariosModels = new UsuariosModels();