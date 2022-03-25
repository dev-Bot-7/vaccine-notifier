import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'src/app/Module/alert';
import { Location } from 'src/app/Module/location';
import { AdminService } from 'src/app/Shared/admin.service';
import { UserService } from 'src/app/Shared/user.service';

export interface CenterInfo {
  locationId : number,
  locationName : string
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  locations : Location[] = [];

  allAlerts : Alert[] = [];

  vaccineCenters : CenterInfo[] = [];
  vaccineCenterObj : CenterInfo = {
    locationId: 0,
    locationName: ''
  }

  alertObj : Alert = {
    alertId: 0,
    locationId: '',
    email: '',
    vaccineName: '',
    vaccineType: ''
  }

  user : string = '';
  email : string = '';
  token : string = '';

  constructor(private userService : UserService, private adminService : AdminService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user")!;
    this.email = JSON.parse(this.user).email;
    this.token = JSON.parse(this.user).token;
    this.getAllAlerts();
    this.getAllLocations();
  }

  getAllAlerts() {
    this.userService.getAllAlerts(this.email,this.token).subscribe(res => {
      this.allAlerts = res;
    }, err => {
      console.log(err);
    })
  }

  deleteAlert(alertObj : Alert) {
    if(window.confirm('Are you sure, you want to delete this '+alertObj.alertId +' ?')) {
      this.userService.deleteAlert(this.token).subscribe(res => {
        if(res == true) {
          this.ngOnInit();
        } else {
          alert('Failed to delete this alert');
        }
      }, err => {
        console.log(err);
      })
    }
  }

  getAllLocations() {
    this.adminService.getAllLocations().subscribe(res => {
      this.locations = res;
    }, err => {
      console.log(err);
    })
  }

  getaVaccineCenterInfo() {
    this.locations.forEach(entity => {
        this.vaccineCenterObj.locationId = entity.locationId;
        this.vaccineCenterObj.locationName = entity.locationName;

        this.vaccineCenters.push(this.vaccineCenterObj);
    });
  }

}
