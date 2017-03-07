import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';
import {SolicitudesDemo} from './solicitudesdemo';
import {SolicitudesDemoRoutingModule} from './solicitudesdemo-routing.module';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		SolicitudesDemoRoutingModule
	],
	declarations: [
		SolicitudesDemo
	]
})
export class SolicitudesDemoModule {}
