import { SolicitudesInterface } from './Solicitudes.interface';
class SolicitudesClase implements SolicitudesInterface {
    constructor(public id_solicitud?,
    public id_catalogo?,
    public gestion?,
    public id_entidad?,
    public id_da?,
    public id_ue?,
    public nro_documento?,
    public tipo_formulario?,
    public tipo_operacion?,
    public fecha_elaboracion?,
    public fecha_verificacion?,
    public usuario_verificacion?,
    public fecha_aprobacion?,
    public usuario_aprobacion?,
    public version_entidad?,
    public version_da?,
    public version_ue?) {

    }
}