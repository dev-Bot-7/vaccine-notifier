import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router : Router) { }

  adminLogin(email : string, password : string) {
    if(email === "admin" && password === "Admin@123") {
      this.router.navigate(['/admin/dashboard']);
      localStorage.setItem("token", Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    } else {
      alert("Please enter valid credentials.")
      this.router.navigate(['/admin/']);
    }
  }

  gettoken() {
    return !!localStorage.getItem("token");
  }

}
