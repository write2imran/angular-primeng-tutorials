import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'wizahrd-child',
    template: `
    <div *ngIf="active" [ngClass]="'ui-widget-content ui-corner-all pe-step-container'" [class]="styleClass">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls: ['./wizard-child.component.scss']
})
export class WizardChildComponent implements OnInit {

    @Input() styleClass: string;
    @Input() label: string;
    active: boolean = false;

    constructor() {
        
     }

    ngOnInit(): void {

     }
}


