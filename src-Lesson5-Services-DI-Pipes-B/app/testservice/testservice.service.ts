import { Injectable } from '@angular/core';
import { LoggingService } from '../logging.service';

@Injectable()
export class TestserviceService {

  constructor(private loggingService: LoggingService) { }

  testFunction() {
    this.loggingService.logSomeText('inside testFunction');
    return 45+23;
  }

}
