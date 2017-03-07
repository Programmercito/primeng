import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';
import {ValidationDemo} from './validationdemo';
import {ValidationDemoRoutingModule} from './validationdemo-routing.module';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		ValidationDemoRoutingModule
	],
	declarations: [
		ValidationDemo
	]
})
export class ValidationDemoModule {}
