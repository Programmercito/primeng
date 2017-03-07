import {Component,OnInit} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
    templateUrl: 'showcase/demo/solicitudes/validationdemo.html'
})
export class ValidationDemo implements OnInit {

    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {

    }

}