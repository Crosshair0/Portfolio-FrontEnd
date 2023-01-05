import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(){ }

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
            
    }

}
