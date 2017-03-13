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
        console.log(JSON.stringify({usuario: usuario, clave: clave}));
        //http://192.168.99.170:7098/AppSeguridad-web/api/seguridad/nvlctl/1/2
        //return this.centralService.peticionpost70(this.cBasePath+'/login', JSON.stringify({usuario: usuario, clave: clave}));
        return this.centralService.peticionget70(this.cBasePath + '/nvlctl/1/2');
    }
    //    login1
    //        (username: string, password: string) {
    //        return this.http.post('/seguridad/login', JSON.stringify({username: username, password: password}))
    //            .map((response: Response) => {
    //                console.log(response);
    //                // login successful if there's a jwt token in the response
    //                //                let user = response.json();
    //                //                if (user && user.token) {
    //                // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                localStorage.setItem('currentUser', JSON.stringify(username));
    //                //                }
    //            });
    //    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}