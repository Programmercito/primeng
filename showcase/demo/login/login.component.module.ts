import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {LoginComponentRoutingModule} from './login.component-routing.module';

import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';
import {InputTextModule} from '../../../components/inputtext/inputtext';
import {PasswordModule} from '../../../components/password/password';

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
        PasswordModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginComponentModule {}
