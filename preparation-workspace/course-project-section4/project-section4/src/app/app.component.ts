import { Component } from '@angular/core';
import {Server} from './shared/Server.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-section4';
  servers:Server[]=[ ];

  onServerAdded(serverdata:{serverName:string,serverContent:string}){
      this.servers.push(new Server(serverdata.serverName,"server",serverdata.serverContent));
  }

  onBluePrintAdded(serverdata:{serverName:string,serverContent:string}){
    this.servers.push(new Server(serverdata.serverName,"blueprint",serverdata.serverContent));
}


}
