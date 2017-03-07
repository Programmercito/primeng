import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudesDemo } from './solicitudesdemo';
import { SolicitudesDemoRoutingModule } from './solicitudesdemo-routing.module';
import { SolicitudesService } from './solicitudes.service';

import { HttpModule } from '@angular/http';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
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
		DialogModule
	],
	bootstrap: [SolicitudesDemo],
	declarations: [
		SolicitudesDemo
	], providers: [SolicitudesService]
})
export class SolicitudesDemoModule { }
