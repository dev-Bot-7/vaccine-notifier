import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Module/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVICE_API = "http://localhost:9091/vaccine-notifier";

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  sendOtp(email: string): any {
    return this.http.get<any>(this.SERVICE_API + '/send-otp/' + email, this.requestOptions);
  }

  verifyOtp(email: string, otp: number): any {
    return this.http.post<any>(this.SERVICE_API + '/verify-otp/' + email + '/' + otp,'', this.requestOptions);
  }

  loginUser(userObj : User) : Observable<User> {
    return this.http.post<User>(this.SERVICE_API+'/user-login',userObj,this.requestOptions);
  }

  registerUser(user : User) : Observable<User> {
    return this.http.post<User>(this.SERVICE_API+'/add-user',user, this.requestOptions);
  }

}
