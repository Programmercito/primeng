import {CgRegCodesDetalleModel} from './cgRegCodesDetalle.model';
import {DaModel} from './da.model';
import {EntidadModel} from './entidad.model';
import {UeModel} from './ue.model';

export class SscSolCatObjModel {
    constructor(
        public gestion?,
        public nroDocumento?,
        public fechaElaboracion?,
        public apiEstado?,
        public motivoSolicitud?,
        public cgRegCodesDetalle?: CgRegCodesDetalleModel,
        public idSolicitud?,
        public da?: DaModel,
        public entidad?: EntidadModel,
        public ue?: UeModel,
        public tipoOperacion?,

    ) {
       
    }
   
    
}