import {Component,OnInit} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
    templateUrl: 'showcase/demo/solicitudes/solicitudesdemo.html'
})
export class SolicitudesDemo implements OnInit {

    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {

    }

}