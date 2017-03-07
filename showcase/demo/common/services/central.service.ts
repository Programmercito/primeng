import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfigGlobal} from '../global/appconfig.global';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class CentralService {
    constructor(private http: Http,
        private appConfigGlobal: AppConfigGlobal) {}

    peticionget(paenlace: string): Observable<Response> {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.get(vl_enlace)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionpost(paenlace: string, pabody: Object, ): Observable<Response> {
        //  let bodyString = JSON.stringify(pabody); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.post(vl_enlace, pabody, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    peticionput(paenlace: string, pabody: Object, ) {
        let bodyString = JSON.stringify(pabody); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.put(`${vl_enlace}/${pabody['id']}`, pabody, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    peticiondelete(paenlace: string, pabody: Object, ) {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.delete(`${vl_enlace}/${pabody}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    // peticiones que esperan la carga del json
    asyncpeticionget(paenlace: string) {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.get(vl_enlace)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    asyncpeticionpost(paenlace: string, pabody: Object, ): Observable<Response> {
        //  let bodyString = JSON.stringify(pabody); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.post(vl_enlace, pabody, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    asyncpeticionput(paenlace: string, pabody: Object, ) {
        let bodyString = JSON.stringify(pabody); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.put(`${vl_enlace}/${pabody['id']}`, pabody, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    asyncpeticiondelete(paenlace: string, pabody: Object, ) {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.delete(`${vl_enlace}/${pabody}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
}