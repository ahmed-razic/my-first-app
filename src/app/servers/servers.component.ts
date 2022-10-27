import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'FirstServer';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  constructor() {
    setTimeout(()=>{this.allowNewServer = true}, 3000)
  }
  
  ngOnInit(): void {
  }
  
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
