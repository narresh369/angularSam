import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
//import { ToastrService } from 'ngx-toastr';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase,
    //public tostr:ToastrService
     ) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
    //this.tostr.success('Submitted Succcessfully', 'Employee Register');

  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary
      });
      //this.tostr.success('Updated Succcessfully', 'Employee Register');
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}
