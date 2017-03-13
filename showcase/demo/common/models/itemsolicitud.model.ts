import {ItemPadreModel} from './itemsolicitudpadre.model';
export class ItemSolicitudModel {
    constructor(
        public idItem?,
        public nivelCatalogo?,
        public descItem?,
        public descDefinicion?,
        public razonOperacion?,
        public apiEstado?,
        public idItemPadre?,
        public codigoItem?,
        public idItemRel?: ItemPadreModel,
        
    ) {}
}