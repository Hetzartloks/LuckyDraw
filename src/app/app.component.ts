import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController, MenuController, NavController } from '@ionic/angular'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private router: Router, private alertController: AlertController, private menu: MenuController) {}

  //Cerrar el menu automaticamente luego de seleccionar una opcion
  navigateTo(route:string){
    //Navega hacia la ruta seleccionada en el menu
    this.router.navigate([route]);
    //Con esto cierra el menu para que tenga una mejor UX
    this.menu.close();
  }

  //Funcion para cerrar sesión
  async logOut(){
    const alert = await this.alertController.create({
      header: '¿Cerrar Sesión?',
      message: '¿Desea usted cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => {
            //Aqui se limpia cualquier dato almacenado
            localStorage.clear(); //sesssionStorage.clear() tambien es efectivo

            //redirigir al usuario a la pagina de login
            this.navigateTo('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}
