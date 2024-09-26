import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm!: FormGroup;

   /**
   * Constructor del componente LoginPage
   *
   * @param formBuilder - Servicio para construir formularios reactivos.
   *                      Necesario para crear y gestionar el formulario.
   * @param router - Servicio para la navegación entre rutas.
   *                 Permite redirigir a otras páginas.
   */

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){

      const {username, password} = this.loginForm.value;

      if(password==='admin'){
        console.log('Entrando..')

        let navigationExtras: NavigationExtras={state:{user:username}};
        this.router.navigate(['/home'], navigationExtras);

      }else{
        console.log('No Entrando..')
      }

  }

}
