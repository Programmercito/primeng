import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SscSolCatModel, SscSolCatObjModel, ListaEstadosModel, ListaOperacionModel, SolicitudModel, ItemSolicitudModel } from '../common/models/index';
//libreriaS PrimeNG
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';

import { PanelModule } from 'primeng/primeng';
//libreriaS PrimeNG Comunes
import { Message } from '../../../components/common/api';
import {ResponseInterface} from './response';
//servicios
import { AlertPrimeNg, SScSolCatLisService, ReporteService, ScCatDocTLisService } from '../common/services/index';



@Component({
    templateUrl: 'showcase/demo/SScSolCatLis/sscsolcatinternodoc.component.html',

})

export class SScSolCatInternoDocComponent implements OnInit {
    vl_enlace = "";
    lista: ItemSolicitudModel[];
    idSolicitud?: number;
    solicitud = new SolicitudModel('', '', '', '', '', null, '', '', '');
    tipoOperacion?: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertprimeng: AlertPrimeNg,
        //    private alertService: AlertService,
        private servicesscsolcatlist: SScSolCatLisService,
        private servicesscsolcatlis: ScCatDocTLisService,
        private reporteService: ReporteService,

        //config: NgbTabsetConfig
    ) {

        //    config.justify = 'center';
        //    config.type = 'pills';
        //    config.vertical ='true';
    }

    ngOnInit() {
        //   .when("/SScSolCatAltaDoc/:idSolicitud/:tipoOperacion", {
        console.log("Metodo initi");
        this.route.params.subscribe(params => {
            if (params['idSolicitud'] != null) {
                this.idSolicitud = params['idSolicitud'];
            }
            if (params['tipoOperacion'] != null) {
                this.tipoOperacion = params['tipoOperacion'];
            }
        });
        this.cargainicial();
    }
    onSubmit() {

        console.log('Accion submit');

    }
    imprimir(sscSolCatObjModel: SscSolCatObjModel) {
        let vl_enlace = "/reportesolicitud/" + sscSolCatObjModel.tipoOperacion +
            "/" + sscSolCatObjModel.cgRegCodesDetalle.descTipo + "/" + sscSolCatObjModel.idSolicitud;
        this.reporteService.reportesolicitud(vl_enlace);
    }
    seleccion(sscSolCatObjModel: SscSolCatObjModel) {
        console.log("Seleccion");
        //console.log(sscSolCatObjModel);
    }
    fecha(obj: number) {
        console.log(new Date(obj));
        return new Date(obj);

    }
    cargainicial() {

        console.log("Ingreso Metodo");
        this.vl_enlace = "/BuscarSolicitudDet/" + this.idSolicitud;//+ "/"+this.tipoOperacion;
        this.servicesscsolcatlis.buscarSolicitudes(this.vl_enlace)
            .map(response => {
                console.log("Entro a responso")
                let resp: ResponseInterface;
                resp = response;
                this.solicitud = <SolicitudModel>resp.solicitud;
                this.lista = <ItemSolicitudModel[]>resp.listaItems;
                console.log(this.solicitud);
                console.log(this.lista);
                console.log("Fin responsive");
            }).subscribe(
            data => {
                console.log("Data");
                console.log(data);
            },
            error => console.error(`Error: ${error}`)
            );
    }
}