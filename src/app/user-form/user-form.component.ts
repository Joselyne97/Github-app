import { Component, OnInit } from '@angular/core';
import {UserService} from '../users/user.service';
import {UserRequestService} from '../user-http/user-request.service';
import {User} from '../user-class/user';
import {Repository} from '../repository-class/repository';
@Component({
  selector: 'ga-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
