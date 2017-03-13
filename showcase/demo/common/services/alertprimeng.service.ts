import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {Message} from '../../../../components/common/api';

@Injectable()
export class AlertPrimeNg {

    msgs: Message[] = [];

    showSuccess( pa_title: string, pa_mensage: string) {
        
       return {severity: 'success', summary: pa_title, detail: pa_mensage};
    }

    showInfo( pa_title: string, pa_mensage: string) {
        
       return {severity: 'info', summary: pa_title, detail: pa_mensage};
    }

    showWarn( pa_title: string, pa_mensage: string) {
        
       return {severity: 'warn', summary: pa_title, detail: pa_mensage};
    }

    showError( pa_title: string, pa_mensage: string) {
        
       return {severity: 'error', summary: pa_title, detail: pa_mensage};
    }

    showSuccessmsg( pa_mensage: string) {

        return{severity: 'success', summary: 'Información', detail: pa_mensage};
    }

    showInfomsg( pa_mensage: string) {
        
       return {severity: 'info', summary: 'Información', detail: pa_mensage};
    }

    showWarnmsg( pa_mensage: string) {
        
        return {severity: 'warn', summary: 'Información', detail: pa_mensage};

    }

    showErrormsg( pa_mensage: string) {
        
       return {severity: 'error', summary: 'Información', detail: pa_mensage};
    }
    showMultiple(pa_msg: Message[]) {
        
//       return {severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks'};
//       return {severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks'};
//       return {severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks'};
    }


}