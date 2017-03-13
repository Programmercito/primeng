import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {SScSolCatLisComponent} from './sscsolcatlis.component';
import {SScSolCatInternoDocComponent} from './sscsolcatinternodoc.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: SScSolCatLisComponent},
            {path: 'sScSolCatAltaDoc/:idSolicitud/:tipoOperacion', component: SScSolCatInternoDocComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SScSolCatLisComponentRoutingModule {}
