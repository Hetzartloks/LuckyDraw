import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})

export class AddDevicePage{

  newDevice = {
    name: '',
    type: '',
    status: 'Offline'
  };

  constructor(private router: Router, private navCtrl: NavController) { };

  addDevice(){
    let navExtras: NavigationExtras = {
      state: {newDevice: this.newDevice}
    };
    this.navCtrl.navigateForward(['/devices'], navExtras);
  }

  goBack(){
    this.navCtrl.back();
  }
}
