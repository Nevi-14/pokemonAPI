import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import pokemons from '../../../assets/data/pokemons.json';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
//interfas para definir los tipos de dato a recibir 
import { OverlayEventDetail } from '@ionic/core/components';

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
name = '';
message = '';
@ViewChild(IonModal) modal: IonModal | any;
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
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
