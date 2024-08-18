import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'demo';

  serverElements :any = [
    {
      type: 'server',
      name: 'name server',
      content: 'content test data content'
    }
  ];

  onAddServer(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    })
  }

  onAddBlueprint(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'Blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    })
  }

}
