import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SolicitudesInterface } from './solicitudes.interface';
import { SolicitudesClase } from './solicitudes';
import { SolicitudesService } from './solicitudes.service';
@Component({
    templateUrl: 'showcase/demo/solicitudes/solicitudesdemo.html'
})
export class SolicitudesDemo {
    displayDialog: boolean;

    sol: SolicitudesInterface = new SolicitudesClase();

    selectedSol: SolicitudesInterface;

    newSol: boolean;

    sols: SolicitudesInterface[];

    constructor(private solService: SolicitudesService) {

    }
    ngOnInit() {
        this.solService.getSolicitudes().then(sols => this.sols = sols);
    }
    showDialogToAdd() {
        this.newSol = true;
        this.sol = new SolicitudesClase();
        this.displayDialog = true;
    }


    save() {
        if (this.newSol) {
            this.sol.id_solicitud = Math.random;
            this.sol.id_catalogo = 12;
            this.sols.push(this.sol);
        }
        else {
            this.sols[this.findSelectedCarIndex()] = this.sol;
        }
        this.sol = null;
        this.displayDialog = false;
    }

    delete() {
        this.sols.splice(this.findSelectedCarIndex(), 1);
        this.sol = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newSol = false;
        this.sol = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: SolicitudesInterface): SolicitudesInterface {
        let sol = new SolicitudesClase();
        for (let prop in c) {
            sol[prop] = c[prop];
        }
        return sol;
    }

    findSelectedCarIndex(): number {
        return this.sols.indexOf(this.selectedSol);
    }
}