import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})

export class DevicesPage{

  devices = [
    {id: 1, name: 'Refrigerador', type: 'Electrodomestico', status: 'Online'},
    {id: 2, name: 'Camara Patio', type: 'Cámara',           status: 'Online'},
    {id: 3, name: 'Tele',         type: 'Televisor',        status:' Offline'}
  ];

  constructor(private router: Router) { }

  goToAddDevice(){
    this.router.navigate(['/add-device']);
  }

  /*
  addDevice(newDevice){
    this.devices.push(device);
  }
  */

}
