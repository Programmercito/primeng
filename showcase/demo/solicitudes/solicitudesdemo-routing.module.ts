import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router'
import {SolicitudesDemo} from './solicitudesdemo';

@NgModule({
	imports: [
		RouterModule.forChild([
			{path:'',component: SolicitudesDemo}
		])
	],
	exports: [
		RouterModule
	]
})
export class SolicitudesDemoRoutingModule {}
