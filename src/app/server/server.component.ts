import { style } from '@angular/animations';
import {Component} from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    serverStatus : string = 'Offline';
    serverID: number = 10;

    getServerStatus(){
        return this.serverStatus;
    }
}