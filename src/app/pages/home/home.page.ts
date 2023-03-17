import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import pokemons from '../../../assets/data/pokemons.json';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { PokemonModalPage } from '../pokemon-modal/pokemon-modal.page';
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
@ViewChildren(IonModal) modal: IonModal | any;
message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string | any = null;
  constructor(
    public router:Router,
   public alertService:AlertService, 
   public modalCtrl: ModalController
  ) {}

  cancel(i:number) {

    console.log('modal', this.modal._results)
    this.modal._results[i].dismiss(null, 'cancel');
  }

  async openModal(pokemon:any) {
    const modal = await this.modalCtrl.create({
      component: PokemonModalPage,
      componentProps:{
        pokemon:pokemon
      }
    });
    modal.present();

  }

  ngOnInit() {
  }
  logOut(){
    this.router.navigateByUrl('/log-in', {replaceUrl:true})
  }
}

//Comment 

/*This is also a comment*/
