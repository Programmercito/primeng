import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';
import {SolicitudesDemo} from './solicitudesdemo';
import {SolicitudesDemoRoutingModule} from './solicitudesdemo-routing.module';
import {SolicitudesService} from './solicitudes.service';
@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		SolicitudesDemoRoutingModule
	],
	declarations: [
		SolicitudesDemo
	], providers: [SolicitudesService]
})
export class SolicitudesDemoModule {}
