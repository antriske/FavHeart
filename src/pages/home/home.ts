import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    cards = [
        {
            "imgPath": "long.jpg",
            "title": "Sand",
            "desc": "This is sand",
            "favorited": false

        },
        {
            "imgPath": "stair.jpg",
            "title": "Stairs",
            "desc": "Me climbing the stairs",
            "favorited": false

        },
        {
            "imgPath": "tank.jpg",
            "title": "Aquarium",
            "desc": "This is my fishies",
            "favorited": false

        }
    ];

  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
      //gets index value of card
    let index = this.cards.indexOf(card);
    //if it's true change it to false
      //if it's false change it to true
    if(index > -1){
        if(card.favorited){
            this.cards[index].favorited = false;
        }else{
            this.cards[index].favorited = true;
        }
    }
  }
}
