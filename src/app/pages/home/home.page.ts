import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import pokemons from '../../../assets/data/pokemons.json';
import { Router } from '@angular/router';
//interfas para definir los tipos de dato a recibir 
interface pokeObject {
name:string,
url:string,
info:{
  type:string,
  strength:string
}
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
pokemonsArray:pokeObject[] = pokemons;
  constructor(
    public router:Router,
   public alertService:AlertService 
  ) {}

  ngOnInit() {
    this.alertService.presentMessageAlert('Welcome', 'Glad to see you again', 'Work hard!...');
    
  }
  logOut(){
    this.router.navigateByUrl('/log-in', {replaceUrl:true})
  }
}
