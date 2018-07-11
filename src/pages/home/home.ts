import { OrderPage } from './../order/order';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {}

 
   PlaceOrder():void {
    let alert = this.alertCtrl.create({
      title: 'Welcome To Nonny CoffeeShop ',
      subTitle: 'Would You Like To Place Your Order',
      buttons: ['Yes']
        
     
  
    });
    alert.present();
    this.navCtrl.push(OrderPage);
  }
  }
 