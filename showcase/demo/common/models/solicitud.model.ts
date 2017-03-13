import {CgRegCodesDetalleModel} from './cgRegCodesDetalle.model';
export class SolicitudModel {
    constructor(
        public gestion?,
        public nroDocumento?,
        public fechaElaboracion?,
        public apiEstado?,
        public motivoSolicitud?,
        public cgRegCodesDetalle?: CgRegCodesDetalleModel,
        public idSolicitud?,
        public tipoFormulario?,
        public tipoOperacion?,
    ) {}
}