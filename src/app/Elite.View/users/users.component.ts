import { Component, OnInit } from '@angular/core';
import { IUser } from "../../Elite.Model/IUser";
import { UserService } from "../../Elite.Services/UserServices";

@Component({
  selector: 'app-users',
  styles: [
        `.search-results {
            height: 20rem;            
        }`
    ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userFirstname: string;
  userLastname: string;
  userEmail: string;

  fullImagePath: string;
  title = 'Elite Users';
  users: IUser[];
  array = [];
  errorMessage: string;
  constructor(private _userService: UserService) {
    this.users = [];
    this.fullImagePath = '../assets/img/Desert.jpg';    
  }

  ngOnInit() {
    let self = this;
    self._userService.getUsers().subscribe(response => this.users = response, error => this.errorMessage = <any>error);      
  }
  over(usr: IUser) {
    this.userFirstname = usr.firstname;
    this.userLastname = usr.lasttname;
    this.userEmail = usr.email;
  }
  leave() {
    this.userFirstname = "";
    this.userLastname = "";
    this.userEmail = "";
  }
  loadMore()
  {
    console.log('Loading more users');
  }

}
