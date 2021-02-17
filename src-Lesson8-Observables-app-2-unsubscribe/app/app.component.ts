import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsersService } from './users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  user1Activated = false;
  user2Activated = false;
  appObsSubscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    //USING SUBJECT TO SUBSCRIBE THE DATA EMITTED BY THE OBSERVABLE....USING HERE AS AN OBSERVER....OR SUBSCIRBER
    //this.usersService.userActivated.subscribe(
      this.appObsSubscription = this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy(){
    alert('entered app components ngOnDestroy function');
    this.appObsSubscription.unsubscribe();
  }
}
