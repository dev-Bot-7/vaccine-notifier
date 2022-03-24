import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  facultyDetailsForm = new FormGroup({
    name: new FormControl(),
    email : new FormControl(),
    mobile : new FormControl(),
    gender : new FormControl(),
    adhar : new FormControl(),
    birthday : new FormControl(),
    department : new FormControl(),
    joiningYear : new FormControl(),
    password : new FormControl()
  });



  constructor(private router : Router) { }

  ngOnInit(): void {

  }




  // sign out
  signout() {
    localStorage.removeItem("token");
    this.router.navigate(['/admin']);
  }

}

