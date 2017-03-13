import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfigGlobal} from '../global/appconfig.global';
import {CentralService} from './central.service';

import 'rxjs/add/operator/map'

@Injectable()
export class ReporteService {
    cBasePath = '/reportes';
    constructor(private http: Http,
        private appConfigGlobal: AppConfigGlobal,
        private centralService: CentralService
    ) {}

    reportesolicitud(pa_enlace: string) {
        let vl_enlace = this.appConfigGlobal.cBaseUrlCompras + this.appConfigGlobal.cApiRespCompras + this.cBasePath+pa_enlace; 
        console.log(vl_enlace);
        window.open(vl_enlace);
        //return this.centralService.peticiongetCompras(this.cBasePath + pa_enlace);
    }
}