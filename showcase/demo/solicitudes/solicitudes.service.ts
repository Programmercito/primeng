import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SolicitudesInterface } from './solicitudes.interface';

@Injectable()
export class SolicitudesService {

    constructor(private http: Http) { }

    getSolicitudes() {
        return this.http.get('src/app/resources/data/cars-medium.json')
            .toPromise()
            .then(res => <SolicitudesInterface[]>res.json().data)
            .then(data => { return data; });
    }
}
