import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfigGlobal} from '../global/appconfig.global';
import {CentralService} from './central.service';

import 'rxjs/add/operator/map'

@Injectable()
export class ScCatDocTLisService {
    cBasePath = '/ScCatDocT';
    constructor(private http: Http,
        private appConfigGlobal: AppConfigGlobal,
        private centralService: CentralService
    ) {}

    buscarSolicitudes(pa_enlace: string) {
        
        return this.centralService.peticiongetCompras(this.cBasePath + pa_enlace);
    }
    
}