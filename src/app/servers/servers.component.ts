import { Component, OnInit } from '@angular/core';

@Component({
    // template: `
    //     <app-server></app-server>
    //     <app-server></app-server>
    // `,
    // selector: '[app-servers]', //select by attribute
    // selector: '.app-servers', //select by class
  selector: 'app-servers', //select as default
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created.';
    serverName = 'Testing';
    serverCreated = false;
    servers = ['TestServer', 'TestServer 2'];

  constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000)
  }

  ngOnInit() {
  }
    
    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: any){
        this.serverName = (<HTMLInputElement>event.target).value;
        // console.log(this.serverName);
    }
}
