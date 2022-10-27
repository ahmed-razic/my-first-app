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

  constructor() {
    setTimeout(()=>{this.allowNewServer = true},3000)
  }
  
  ngOnInit(): void {
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
