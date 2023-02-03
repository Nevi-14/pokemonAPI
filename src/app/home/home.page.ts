import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {
pokemonsArray = [
{
  name :'Charmander',
  url : '../assets/icons/charmander.png'
},
{
  name :'Pikachu',
  url : '../assets/icons/pikachu.png'
},
{
  name :'Bullbasaur',
  url : '../assets/icons/bullbasaur.png'
}

];
  constructor() {}

  ngOnInit() {
    
  }
}
