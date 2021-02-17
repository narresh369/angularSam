import { Subject } from 'rxjs';


export class UsersService {
  //A SUBJECT IS BOTH AN OBSERVABLE AND AND OBSERVER...IT CREATS A BRIDGE FOR THE TWO
  userActivated = new Subject();
}
