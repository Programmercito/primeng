/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {ListaEstadosModel} from './listaestados.model';
import {ListaOperacionModel} from './listaoperaciones.model';
import {SscSolCatObjModel} from './sscsolcatObj.model';


export class SscSolCatModel {
    constructor(
        //public lista: SscSolCatObjModel[],
        public numRegistros: number,
        //public listaestados: ListaEstadosModel[],
        //public listaoperaciones: ListaOperacionModel[],
        public draw: number,
    ) {}
}