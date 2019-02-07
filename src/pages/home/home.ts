import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  startDisable: boolean = false;
  initCounter: number = 0;
  trump: Array<any> = [];


  constructor(public navCtrl: NavController) {

  }

  getCard() {
    this.startDisable = !this.startDisable;
    this.initCounter = 1;

  }

  set() {
    this.initCounter = 2;
  }

  drow() {
    this.initCounter++;
  }


  setCard() {
    this.json('♦');
    this.json('♥');
    this.json('♧');
    this.json('♠');
  }

  json(mark) {
    for (var i = 1; i < 14; i++) {
      var n: string;

      if (i == 11) { n = "J" }
      else if (i == 12) { n = "Q" }
      else if (i == 13) { n = "K" }
      else { n = String(i)}

      let addData = {
        "number": n + mark
      }
      this.trump.push(addData);
    }
  }

  random() {

  }





}




