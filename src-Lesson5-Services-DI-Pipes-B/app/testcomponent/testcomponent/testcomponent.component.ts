import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../../testservice/testservice.service';
import { LoggingService } from '../../logging.service';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
  
})
export class TestcomponentComponent implements OnInit {


  val;

  constructor(private testserviceService: TestserviceService, private loggingService: LoggingService) {

    this.val = this.testserviceService.testFunction();
    this.loggingService.logSomeText('hello how r u...');
  }
  


  

  ngOnInit() {
  }


}
