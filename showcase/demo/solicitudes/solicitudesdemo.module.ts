import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudesDemo } from './solicitudesdemo';
import { SolicitudesDemoRoutingModule } from './solicitudesdemo-routing.module';
import { SolicitudesService } from './solicitudes.service';

import { HttpModule } from '@angular/http';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
import {CalendarModule} from '../../../components/calendar/calendar';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SolicitudesDemoRoutingModule,
		
		FormsModule,
		HttpModule,
		InputTextModule,
		DataTableModule,
		ButtonModule,
		DialogModule,CalendarModule
	],
	bootstrap: [SolicitudesDemo],
	declarations: [
		SolicitudesDemo
	], providers: [SolicitudesService]
})
export class SolicitudesDemoModule { }
