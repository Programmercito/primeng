import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {UsuarioModel} from '../common/models/index';
//libreriaS PrimeNG
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
//libreriaS PrimeNG Comunes
import {Message} from '../../../components/common/api';
//servicios
import {AlertPrimeNg, AuthenticationService} from '../common/services/index';



@Component({
    templateUrl: 'showcase/demo/login/login.component.html',
    styleUrls: ['/common/css/estilos.css'],
})

export class LoginComponent implements OnInit {
    msgs: Message[] = [];

    usrmodel = new UsuarioModel(parseInt("10"), '', '', '', false, false);
    submitted = false;

    dato = "Creando componentes para DesarrolloWeb.com";
    title = "Ingresar al sistema";
    items: Object = [];
    datos;
    model = {
        left: true,
        middle: false,
        right: false
    };



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertprimeng: AlertPrimeNg,
        //    private alertService: AlertService,
        private authenticationService: AuthenticationService,
        //config: NgbTabsetConfig
    ) {

        //    config.justify = 'center';
        //    config.type = 'pills';
        //    config.vertical ='true';
    }

    ngOnInit() {

    }
    onSubmit() {
        console.log('Accion submit')
        this.submitted = true;
        //alert('hola');
    }
   
    login() {
        console.log('Accion submit');
        console.log(this.usrmodel);
        this.submitted = false;
        this.authenticationService.login(this.usrmodel.usuario, this.usrmodel.clave)
            .map(response => {
                console.log("Login Component");
                console.log(response);
                       })
            .subscribe(
            data => {
                console.log("Data");
                console.log(data);
                //                if (data.login == 1) {
                //                    localStorage.setItem('currentUser', data.token);
                //                    //this.router.navigate(['/inicio']);
                //                }
                //                else {
                //                    console.log("Usuario o Contraseña Incorrecta");
                //                }
            },
            error => console.error(`Error: ${error}`)
            );
        //                console.log(response)} )
        //        
        //            .map(response => {console.log("response");
        //                console.log(response)} )
        //                
        //            .subscribe(
        //            data => { console.log("data recibido");
        //                console.log(data);
        ////                if (data.login == 1) {
        ////                    localStorage.setItem('currentUser', data.token);
        ////                    this.router.navigate(['/solicitudes']);
        ////                }
        ////                else {
        ////
        ////                }
        //            },
        //            error => {
        //                  console.log("Errorsas");
        //                console.log(error);
        //                this.msgs.push(this.alertprimeng.showErrormsg("Usuario o Contraseña Incorrecta ->" + error));
        //            }
        //            );











        //        if (this.usrmodel.usuario == 'SOP697749800' && this.usrmodel.clave == 'temp        ito') {
        //            //this.alertService.success("Usuario Correcto redirreccionar..        ....");
        //            //this.router.navigate(['/m        enu']);
        //            console.log('correcto');
        //            this.alertprimeng.showSuccessmsg("Usuario Correcto");
        //        }
        //        else {
        //            //this.alertService.error("Usuario o Contraseña Incorrecta");
        //            this.msgs.push(this.alertprimeng.showErrormsg("Usuario o Contraseña Incorrecta"));
        //
        //            console.log('incorrecto');
        //        }


    }
    cargar(resp) {
        this.items = resp;
    }
    limpiar() {

    }

}