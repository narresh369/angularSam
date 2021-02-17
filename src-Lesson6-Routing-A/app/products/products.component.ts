import { Component, OnInit } from '@angular/core';
import { MyservicediService } from '../myservicedi/myservicedi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  brokers:any;
  
    constructor(private myservicediService: MyservicediService) {
      this.getBrokersListDataX();
    }
  
        //----------------------------------------------------------------------------------------------
        getBrokersListDataX() {
      this.brokers = this.myservicediService.getBrokers();      
      }
      //-------------------------------------------------

  ngOnInit() {
  }

}
