import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.page.html',
  styleUrls: ['./wish-card.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WishCardPage implements OnInit {

  constructor() { }

  

  ngOnInit() {
  }


  shareWish() {
    const url = window.location.href; // lien actuel
    if (navigator.share) {
      navigator.share({
        title: 'Carte de souhait 🎉',
        text: 'Clique ici pour voir ta carte 🎁',
        url: url,
      });
    } else {
      alert('Partagez ce lien : ' + url);
    }
  }

}
