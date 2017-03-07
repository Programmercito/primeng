
//app/todos/shared/todo.model.ts
export class UsuarioModel {
    constructor(
        public id: number,
        public usuario: string,
        public clave: string,
        public mensaje: string,
        public logged: boolean = false,
        public isImportant: boolean = false
    ){}
}
