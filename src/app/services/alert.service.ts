import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
  private alertCtrl:AlertController  
  ) { }



async presentMessageAlert(header:string, subheader:string, message:string){

const alert = await this.alertCtrl.create({
  header:header,
  subHeader:subheader,
  message:message,
  buttons:['OK']
})

await alert.present();

}



}
