import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  user:User = {
  email:"",
  password:"null"
  }
  constructor() { }
}
