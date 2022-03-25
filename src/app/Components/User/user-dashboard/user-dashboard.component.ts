import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/Module/location';
import { AdminService } from 'src/app/Shared/admin.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  alerts : boolean = false;
  overview : boolean = false;
  user : string = '';
  username : string = '';
  locations : Location[] = [];

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.showOverview();
    this.getAllLocations();
    this.user = localStorage.getItem('user')!;
    this.username = JSON.parse(this.user).fullName;
  }

  setOff() {
    this.overview = false;
    this.alerts = false;
  }

  showAlerts() {
    this.setOff();
    this.alerts = true;
  }

  showOverview() {
    this.setOff();
    this.overview = true;
  }

  getAllLocations() {
    this.adminService.getAllLocations().subscribe(res => {
      this.locations = res;
    }, err => {
      console.log(err);
    })
  }

  signout() {

  }

}
