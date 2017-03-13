import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginComponentRoutingModule} from './login.component-routing.module';
import {HttpModule,JsonpModule } from '@angular/http';
//Ng Primefaces
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';
import {InputTextModule} from '../../../components/inputtext/inputtext';
import {PasswordModule} from '../../../components/password/password';
import {MessagesModule} from '../../../components/messages/messages';
//Componentes Externos
import {AlertService, AuthenticationService, CentralService, AlertPrimeNg} from '../common/services/index';
import {AppConfigGlobal} from '../common/global/appconfig.global';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginComponentRoutingModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        InputTextModule,
        PasswordModule,
        MessagesModule,
        HttpModule,
        JsonpModule ,
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        //        {provide: APP_BASE_HREF, useValue: '/AppSeguridad-web'},
        //        AuthGuard,
        AlertService,
        AuthenticationService,
        AppConfigGlobal,
        CentralService,
        AlertPrimeNg,
    ],
})
export class LoginComponentModule {}
