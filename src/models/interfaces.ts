export interface Usuarios {
    id?: number;
    nombre: string;
    descripcion?: string;
    correo: string;
    contra: string;
    rol?: number;
}
export interface Bacantes {
    id: string;
    nombre: string;
    descripcion: string;
}