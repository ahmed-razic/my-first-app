import { style } from '@angular/animations';
import {Component} from '@angular/core'

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styles: [`
    h2 {
        background: red;
        color: blue;
    }    
    `]
})


export class WarningComponent {}