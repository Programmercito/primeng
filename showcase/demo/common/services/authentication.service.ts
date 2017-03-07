import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppConfigGlobal} from '../global/appconfig.global';
import {CentralService} from './central.service';

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    cBasePath = '/seguridad';
    constructor(private http: Http,
        private appConfigGlobal: AppConfigGlobal,
        private centralService: CentralService
    ) {}

    login(usuario: string, clave: string) {





        //console.log(this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest +this.cBasePath+ '/login');
        return this.centralService.peticionpost(this.cBasePath+'/login', JSON.stringify({usuario: usuario, clave: clave}));

        //
        //       return  this.http.post(this.appConfigGlobal.cBaseUrl + this.appConfigGlobal.cApiRest + '/seguridad/login', JSON.stringify({usuario: usuario, clave: clave}), options)
        ////            .map((res: Response) => res.json());
        ////        console.log('cuerpo...');
        ////        console.log(vl_rque);
        ////        return vl_rque;
        //                    .map((response: Response) => {
        //                        console.log(response);
        //                        console.log('cuerpo...');
        //                        console.log(response._body);
        //                        console.log(JSON.stringify(response._body));
        //        
        //                        alert('hola');
        //                        // login successful if there's a jwt token in the response
        //                        //                let user = response.json();
        //                        //                if (user && user.token) {
        //                        //                    // store user details and jwt token in local storage to keep user logged in between page refreshes
        //                        //                   localStorage.setItem('currentUser', JSON.stringify(user));
        //                        //                }
        //                    });
    }
    login1
        (username: string, password: string) {
        return this.http.post('/seguridad/login', JSON.stringify({username: username, password: password}))
            .map((response: Response) => {
                console.log(response);
                // login successful if there's a jwt token in the response
                //                let user = response.json();
                //                if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(username));
                //                }
            });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}