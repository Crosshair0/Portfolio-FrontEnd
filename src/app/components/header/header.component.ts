import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
// @ts-ignore
import Typewriter from 't-writer.js';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLogged = false;

    constructor(private router:Router,private tokenService: TokenService){ }

    ngOnInit():void {
      const target = document.querySelector('.tw')
      const writer = new Typewriter(target, {
        loop: true, 
        typeColor: 'white' 
      })
      
      writer
        .strings(
          600,
          "Argentina Programa",
          "#YoProgramo", 
          "4ta Edicion"
          
        )
        .start()
            
         if(this.tokenService.getToken()) {
            this.isLogged = true;

         } else {
          this.isLogged = false;
         }

         
    }

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
     }

}
