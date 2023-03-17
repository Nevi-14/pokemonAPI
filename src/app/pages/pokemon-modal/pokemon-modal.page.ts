import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.page.html',
  styleUrls: ['./pokemon-modal.page.scss'],
})
export class PokemonModalPage implements OnInit {
@Input() pokemon:any
  constructor(
public modalCtrl:ModalController

  ) { }

  ngOnInit() {
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}
