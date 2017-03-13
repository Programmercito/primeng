import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions, Request} from '@angular/http';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfigGlobal} from '../global/appconfig.global';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class CentralService {

    constructor(private http: Http,
        private appConfigGlobal: AppConfigGlobal,
        private jsonp: Jsonp) {}
    peticiongetCompras(paenlace: string): Observable<Response> {
        let vl_enlace = this.appConfigGlobal.cBaseUrlCompras + this.appConfigGlobal.cApiRespCompras + paenlace;
        console.log(vl_enlace);
        return this.http.get(vl_enlace)
            .map((res: Response) => {
                console.log("Ingreso para Peticion");
                return res.json();
                
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionget(paenlace: string): Observable<Response> {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.get(vl_enlace)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionpost(paenlace: string, pabody: Object, ): Observable<Response> {
        //  let bodyString = JSON.stringify(pabody); 

        let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
        let options = new RequestOptions({headers: headers});
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.post(vl_enlace, pabody, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionput(paenlace: string, pabody: Object, ) {
        let bodyString = JSON.stringify(pabody);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.put(`${vl_enlace}/${pabody['id']}`, pabody, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticiondelete(paenlace: string, pabody: Object, ) {
        let vl_enlace = this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + paenlace;
        return this.http.delete(`${vl_enlace}/${pabody}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionget70(paenlace: string): Observable<Response> {

        //        let headers = new Headers();
        //        headers.append('Accept', 'application/json');
        //        headers.append('Authorization', 'SERVER_TOKEN');//assigning my server token to header
        //        headers.set('Access-Control-Allow-Origin', '*');
        //        //headers.get('Access-Control-Allow-Origin');
        //        headers.append('Access-Control-Allow-Headers', 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token');
        //        //headers.get('Access-Control-Allow-Headers');
        //
        //        let options = new RequestOptions({headers: headers});

        //let vl_enlace = this.appConfigGlobal.cHost70 + this.appConfigGlobal.cBaseUrl70 + this.appConfigGlobal.cApiRest70 + paenlace;
        let vl_enlace = 'http://localhost:7098/Compras-web/api/ScCatDoc/';
        var headers = new Headers();

        headers.set('Content-Type', ['application/json']);
        headers.set('Access-Control-Allow-Origin', ['*']);

        let reqoptions = new RequestOptions({
            headers: headers
        });

        console.log(vl_enlace);
        //headers.append( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        return this.http.get(vl_enlace)
            .map((res: Response) => {
                console.log("asd")
                console.log(res);
                return res.json();
                //console.log(res.json());
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticionpost70(paenlace: string, pabody: Object, ): Observable<Response> {
        //  let bodyString = JSON.stringify(pabody); 
        //        let headers = new Headers({'Content-Type': 'application/json'});
        //        let options = new RequestOptions({headers: headers});

        let vl_enlace = this.appConfigGlobal.cHost70 + this.appConfigGlobal.cBaseUrl70 + this.appConfigGlobal.cApiRest70 + paenlace;

        //        return this.http.post(vl_enlace, pabody, options)
        //            .map((res: Response) => res.json())
        //            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        //        return this.http.post(vl_enlace, pabody, options)
        //            .map((res: Response) => {
        //                return res.json();
        //            })
        //            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        headers.append("accept", 'application/json');
        headers.append("Authorization", 'token ');

        let requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: vl_enlace,
            headers: headers,
            body: pabody
        })

        return this.http.request(new Request(requestoptions))
            .map((res: Response) => {
                console.log("Ingreso");
                console.log(res);
                return res.json();

            });
    }
    peticionput70(paenlace: string, pabody: Object, ) {
        let bodyString = JSON.stringify(pabody);
        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        let options = new RequestOptions({headers: headers});
        let vl_enlace = this.appConfigGlobal.cHost70 + this.appConfigGlobal.cBaseUrl70 + this.appConfigGlobal.cApiRest70 + paenlace;
        return this.http.put(`${vl_enlace}/${pabody['id']}`, pabody, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    peticiondelete70(paenlace: string, pabody: Object, ) {
        let vl_enlace = this.appConfigGlobal.cHost70 + this.appConfigGlobal.cBaseUrl70 + this.appConfigGlobal.cApiRest70 + paenlace;
        return this.http.delete(`${vl_enlace}/${pabody}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}