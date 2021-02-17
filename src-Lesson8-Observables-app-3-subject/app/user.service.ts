import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  
  //USING EVENT EIMITTER
  //activatedEmitter = new EventEmitter<boolean>();
  
  //USING SUBJECT
  activatedEmitter = new Subject<boolean>();
}
