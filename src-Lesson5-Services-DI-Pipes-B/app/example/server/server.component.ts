import { Component } from '@angular/core';
import { MyservicediService } from 'src/app/myservicedi/myservicedi.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  constructor(private xx:MyservicediService){

  }

  test(){
    
  }

}
