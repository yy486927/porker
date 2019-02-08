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
  drawCard: Array<any> = [];
  num: number;
  hand: Array<any> = [];
  field: Array<any> = [];


  constructor(public navCtrl: NavController) {

  }

  getCard() {
    this.startDisable = !this.startDisable;
    this.initCounter = 1;
    for (var i = 0; i < 2; i++) {
     this.hand.push(this.num);
     this.random();
      // this.initCounter++;
    }
    
  }

  set() {
    this.initCounter = 3;
    for (var i = 0; i < 3; i++) {
      this.field.push(this.num);
      this.random();
     }
  }

  drow() {
    this.field.push(this.num);
    this.random();
    // this.initCounter++;
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

      if (i == 1) { n = "A"}
      else if (i == 11) { n = "J" }
      else if (i == 12) { n = "Q" }
      else if (i == 13) { n = "K" }
      else { n = String(i) }

      let addData = { "number": n + mark }
      this.trump.push(addData);
    }
  }

  random() {
    this.num = Math.floor(Math.random() * this.trump.length);
    var a = this.checkOverlap(this.num);
    if (a) {
      this.random();
    }

  }

  checkOverlap(num) {
    for (var i = 0; i < this.drawCard.length; i++) {

      if (num == this.drawCard[i]) {
        return true;
      }
    }
    this.drawCard.push(num);
    console.log(this.drawCard[this.drawCard.length-1]);
    return false;
  }

}




