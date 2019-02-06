import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  startDisable:boolean = false;
  initCounter:number = 0;
  

  constructor(public navCtrl: NavController) {

  }

  getcard(){
    this.startDisable =! this.startDisable;
    this.initCounter = 1;

  }

  set(){
    this.initCounter = 2;
  }

  drow(){
    this.initCounter++;
  }
  
}

