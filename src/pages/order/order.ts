import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 ;
 
  counter:number=1;
  
  whippedcream=false
  chocolate=false
  latteart=false
  pricelatteart=10;
  pricewhippedcream=6;
  pricechocolate=12;
  
  price= 20.00;
  netprice=0.0;

  
  Quantity(value:number):void{
    this. counter+=value;
  }
  purchase():void{
    this.calcCost();
  }

  calcCost():number{

this.netprice=this.price*this.counter;

if (this.whippedcream && this.chocolate)
this.netprice=(this.pricewhippedcream + this.pricechocolate)*this.counter;


if (this.chocolate &&this.latteart && this.whippedcream&&this.price) 
this.netprice =(this.pricechocolate + this.pricelatteart + this.pricewhippedcream+this.price)*this.counter


  if (this.chocolate)
  this.netprice=(this.pricechocolate)*this.counter+this.price;

 else if (this.latteart)
  this.netprice=(this.pricelatteart)*this.counter+this.price;
  
  else if (this.whippedcream)
  this.netprice=(this.pricewhippedcream*this.counter+this.price);
  
  return this.netprice;

  }
  




  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

}
