import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  startDisable:boolean = false;
  initCounter:number = 0;
  trump: Array<any> = [];
  

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


  cardset(){
    this.json('♦');
    this.json('♥');
    this.json('♧');
    this.json('♠');
    console.log("数字" + this.trump[39].number);
    console.log("記号" + this.trump[39].mark);
  }
 
  json(mark){
    for(var i = 1; i < 11; i++){
      for(var j = mark; j.length < i ; j += mark);
       let addData = {
        "number": i,
        "mark": j
      }
      this.trump.push(addData);
    }
  }

  random(){
    
  }

  
 
  

}




