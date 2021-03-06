"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crud = void 0;
const database_1 = __importDefault(require("../database"));
class Crud {
    constructor() {
    }
    init(tabla, id) {
        this.nombreTabla = tabla;
        this.nombreId = id;
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ' + this.nombreTabla + ' set ?', [data]);
            return result;
        });
    }
    select(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const result = yield database_1.default.query('SELECT * FROM ' + this.nombreTabla + ' WHERE ' + this.nombreId + ' = ' + id);
                return result;
            }
            else {
                const result = yield database_1.default.query('SELECT * FROM ' + this.nombreTabla);
                return result;
            }
        });
    }
    selectNombre(selectNombre, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM ' + this.nombreTabla + ' WHERE ' + selectNombre + ' = "' + nombre + '"');
            return result;
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('UPDATE ' + this.nombreTabla + ' SET ? WHERE ' + this.nombreId + ' = ?' + [data, id]);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('DELETE FROM ' + this.nombreTabla + ' WHERE ' + this.nombreId + ' = ' + id);
            return result;
        });
    }
}
exports.crud = new Crud();
