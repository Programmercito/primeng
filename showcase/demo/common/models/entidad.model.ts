import {EntidadDetalleModel} from './entidaddetalle.model';
export class EntidadModel {
    constructor(
        public detalle: EntidadDetalleModel,
        public codigo?,
        public descripcion?,
    ) {}
}