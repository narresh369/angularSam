import { Component, OnInit } from '@angular/core';
import { MyservicediService } from '../myservicedi/myservicedi.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  trxns:any;
  
    constructor(private myservicediService: MyservicediService) {
      this.getTrxnsListDataX();
    }
  
        //----------------------------------------------------------------------------------------------
        getTrxnsListDataX() {
      this.myservicediService.getTrxnsList().subscribe(    
        data1 => { 
            //const data = data1.json();
            //console.log(data);
            //alert(JSON.stringify(data1));
            
            //this.trxns = data1.json();
            this.trxns = data1;
        },
        err => console.error(err),
        () => console.log('done loading stock list 2222222222222222222')
      );
      
      }
      //-------------------------------------------------

      

  ngOnInit() {
    //this.getTrxnsListDataX();
  }

}
