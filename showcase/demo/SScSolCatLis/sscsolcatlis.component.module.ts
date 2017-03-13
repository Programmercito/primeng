import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SScSolCatLisComponent} from './sscsolcatlis.component';
import {SScSolCatInternoDocComponent} from './sscsolcatinternodoc.component';


import {SScSolCatLisComponentRoutingModule} from './sscsolcatlis.component-routing.module';
import {HttpModule, JsonpModule} from '@angular/http';
//Ng Primefaces
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';
import {InputTextModule} from '../../../components/inputtext/inputtext';
import {PanelModule} from '../../../components/panel/panel';
import {InputTextareaModule} from '../../../components/inputtextarea/inputtextarea';
import {PasswordModule} from '../../../components/password/password';
import {MessagesModule} from '../../../components/messages/messages';
import {DataTableModule} from '../../../components/datatable/datatable';
import {DropdownModule} from '../../../components/dropdown/dropdown';
import {CalendarModule} from '../../../components/calendar/calendar';
import {ContextMenuModule} from '../../../components/contextmenu/contextmenu';
import {DialogModule} from '../../../components/dialog/dialog';
import {SliderModule} from '../../../components/slider/slider';
import {MultiSelectModule} from '../../../components/multiselect/multiselect';
import {GrowlModule} from '../../../components/growl/growl';

//Componentes Externos
import {AlertService, SScSolCatLisService, CentralService, AlertPrimeNg, ReporteService, ScCatDocTLisService} from '../common/services/index';
import {AppConfigGlobal} from '../common/global/appconfig.global';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SScSolCatLisComponentRoutingModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule,
        InputTextModule,
        InputTextareaModule,
        PasswordModule,
        MessagesModule,
        HttpModule,
        JsonpModule,
        DataTableModule,
        DropdownModule,
        CalendarModule,
        ContextMenuModule,
        DialogModule,
        SliderModule,
        MultiSelectModule,
        GrowlModule,
        PanelModule,

    ],
    declarations: [
        SScSolCatLisComponent,
        SScSolCatInternoDocComponent,
    ],
    providers: [
        //        {provide: APP_BASE_HREF, useValue: '/AppSeguridad-web'},
        //        AuthGuard,
        AlertService,
        SScSolCatLisService,
        AppConfigGlobal,
        CentralService,
        AlertPrimeNg,
        ReporteService,
        ScCatDocTLisService,
    ],
})
export class SScSolCatLisComponentModule {}
