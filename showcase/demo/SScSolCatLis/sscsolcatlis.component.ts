import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SscSolCatModel, SscSolCatObjModel, ListaEstadosModel, ListaOperacionModel } from '../common/models/index';
//libreriaS PrimeNG
import { InputTextModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { LazyLoadEvent } from '../../../components/common/api';
import { FilterMetadata } from '../../../components/common/api';
//libreriaS PrimeNG Comunes
import { Message } from '../../../components/common/api';
import { ResponseInterface } from './response'
//servicios
import { AlertPrimeNg, SScSolCatLisService, ReporteService } from '../common/services/index';


@Component({
    templateUrl: 'showcase/demo/SScSolCatLis/sscsolcatlis.component.html',
    styleUrls: ['/common/css/estilos.css'],
})

export class SScSolCatLisComponent implements OnInit {
    vl_enlace = "";
    lista: SscSolCatObjModel[];
    listaestados: ListaEstadosModel[];
    listaoperaciones: ListaOperacionModel[];

    listasel: SscSolCatModel[];
    listajson: Object[];

    minDate: Date;

    maxDate: Date;
    es: any;
    totalRecords: number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertprimeng: AlertPrimeNg,
        //    private alertService: AlertService,
        private servicesscsolcatlist: SScSolCatLisService,
        private reporteService: ReporteService,
        //config: NgbTabsetConfig
    ) {

        //    config.justify = 'center';
        //    config.type = 'pills';
        //    config.vertical ='true';
    }

    ngOnInit() {
        console.log("Metodo initi");



        this.listainicial();
    }
    onSubmit() {

        console.log('Accion submit');

    }
    imprimir(sscSolCatObjModel: SscSolCatObjModel) {
        console.log(sscSolCatObjModel);
        let vl_enlace = "/reportesolicitud/" + sscSolCatObjModel.tipoOperacion +
            "/" + sscSolCatObjModel.cgRegCodesDetalle.descTipo + "/" + sscSolCatObjModel.idSolicitud;
        this.reporteService.reportesolicitud(vl_enlace);
    }
    seleccion(sscSolCatObjModel: SscSolCatObjModel) {
        console.log("Seleccion");
        this.router.navigate(['/sscsolcatlis/sScSolCatAltaDoc', sscSolCatObjModel.idSolicitud, sscSolCatObjModel.tipoOperacion]);
        //this.router.navigate(['/sScSolCatAltaDoc']);
    }
    fecha(obj?) {
        console.log(obj);
        return new Date(obj);

    }
    listainicial() {
        console.log("Ingreso Metodo");
        this.vl_enlace = "/listar?dateAprobacionDesdeBusqueda=&dateAprobacionHastaBusqueda=&dateElaboracionDesdeBusqueda=&dateElaboracionHastaBusqueda=&descripcionBusqueda=&draw=1&estadoBusqueda=&length=10&menu=3611002&start=0&tipoOperacion=";
        this.servicesscsolcatlist.listainicial(this.vl_enlace)
            .map(response => {
                let resp: ResponseInterface;
                resp = response;
                console.log(response);
                this.lista = <SscSolCatModel[]>resp.lista;
                this.totalRecords = resp.numRegistros;
            }).subscribe(
            data => {
            },
            error => console.error(`Error: ${error}`)
            );


    }
    loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        console.log("ingreso ... lazy on load");
        console.log(event);
        //        setTimeout(() => {
        //            if (this.datasource) {
        //                this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        //            }
        //        }, 250);
        let draw = event.first / 10;
        this.vl_enlace = "/listar?dateAprobacionDesdeBusqueda=&dateAprobacionHastaBusqueda=&dateElaboracionDesdeBusqueda=&dateElaboracionHastaBusqueda=&descripcionBusqueda=&draw=" + draw + "&estadoBusqueda=&length=10&menu=3611002&start=" + event.first + "&tipoOperacion=";
        this.servicesscsolcatlist.listainicial(this.vl_enlace)
            .map(response => {
                let resp: ResponseInterface;
                resp = response;
                console.log(response);
                this.lista = <SscSolCatModel[]>resp.lista;
                this.totalRecords = resp.numRegistros;
            }).subscribe(
            data => {
            },
            error => console.error(`Error: ${error}`)
            );

    }


}