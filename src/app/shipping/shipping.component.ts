import { Component, OnInit } from '@angular/core';
import { CartService, Info } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  //Variabile contenente l'observable, utilizziamo l'async con questa
  shippingCosts$ = this.cartService.getShippingPrices();
  //Array di tipo Info che conterrà i valori ottenuti dall'observable tramite il subscribe
  shippingCosts: Info[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    //Subscribe serve è per creare yun collegamento con l'observable e prelevare dei dati
    this.cartService.getShippingPrices().subscribe({
      //Il next serve per estrarra i dati dell'observable, in questo caso li salva i dati in response e poi li copia nell'array shippingCost
      next: (response) => {
        this.shippingCosts = response;
      },
      //L'error segnale qualche errore
      error: () => {},
      //Il complete segnala che l'operazione è finita
      complete: () => {},
    });
  }
}
