import {DaDetalleModel} from './dadetalle.model';
export class DaModel {
    constructor(
        public detalle: DaDetalleModel,
        public codigo?,
        public descripcion?,
    ) {}
}