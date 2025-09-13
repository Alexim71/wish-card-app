import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.page.html',
  styleUrls: ['./wish-card.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WishCardPage implements OnInit, OnDestroy{

  constructor() { }

  
isOpen = false;
isTurn = false;
private fireworksInterval: any;

  ngOnInit() {
    this.isOpen = !this.isOpen;
    this.isTurn = !this.isTurn
  }


  

  toggleOpen() {
    
    this.isTurn = !this.isTurn

      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 800); // temps d’animation fermeture

      if (this.isOpen) {
      this.startFireworks();
    } else {
      this.stopFireworks();
    }
  }

  private startFireworks() {
    this.stopFireworks(); // éviter plusieurs intervalles en même temps

    this.fireworksInterval = setInterval(() => {
      this.launchFireworks();
    }, 1000); // un tir toutes les 1s
  }

   private stopFireworks() {
    if (this.fireworksInterval) {
      clearInterval(this.fireworksInterval);
      this.fireworksInterval = null;
    }
  }
  
   private launchFireworks() {
    function fire(particleRatio: number, opts: any) {
      confetti(Object.assign({}, opts, {
        particleCount: Math.floor(150 * particleRatio)
      }));
    }

     // Tir vers la gauche
    fire(0.25, { spread: 26, startVelocity: 55, angle: 60, origin: { x: 0.2, y: 0.8 } });

    // Tir vers la droite
    fire(0.2, { spread: 60, angle: 120, origin: { x: 0.8, y: 0.8 } });

    // Tir vers le haut-centre
    fire(0.35, { spread: 100, decay: 0.91, scalar: 1.2, angle: 90, origin: { x: 0.5, y: 1 } });

    // Tir aléatoire gauche/droite
    fire(0.1, { spread: 120, startVelocity: 25, angle: Math.random() * 360, origin: { x: Math.random(), y: Math.random() * 0.5 } });
  }
  shareWish() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    if (navigator.share) {
      navigator.share({
        title: 'Carte de souhait 🎉',
        text: 'Joyeux Anniversaire 🎂✨',
        url: window.location.href
      });
    } else {
      alert('Le partage n’est pas supporté sur ce navigateur.');
    }
  }

   ngOnDestroy() {
    this.stopFireworks();
  }

}
