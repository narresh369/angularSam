import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  /* STRING INTERPOLATION EXAMPLE */
  serverId: number = 10;
  serverStatus: string = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
func2(x,y){
  return x*y;

}
 
}
