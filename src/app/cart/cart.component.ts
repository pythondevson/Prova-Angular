//Import serve per importare in questo file le librerie, le componenti e i servizi necessari per funzionare
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  //Il selettore serve per riconoscere ed inserire il componenti nell'html e per modificarlo nel css
  selector: 'app-cart',
  //È il template che viene richiamata quando viene inserito il selettore nell'html. Indica cosa fa la componente
  templateUrl: './cart.component.html',
  //Sono gli stili della componente
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //items contiene l'array items di tipo Product contenuto nel servizio CartService. Lo ottiene tramite il metodo .getItems, sempre appartenente allo stesso servizio
  items = this.cartService.getItems();

  //checkoutForm contiene un oggettom di tipo FormGroup, che a sua volta contiene altri oggetti di tipo FormControl, name e adress
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  //costruttore necessario a iniettare nella componente CartService e FormBuilder
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    //Mettiamo all'interno di this.items il ritorno della funzione .clearCart di cartService
    this.items = this.cartService.clearCart();
    //console.warn stampa un warning nella console con la stringa tra virgolette e gli attributi dell'oggetto di tipo FormGroup all'interno di checkoutForm
    console.warn('Your order has been submitted', this.checkoutForm.value);
    //Cancella il contenuto del form
    this.checkoutForm.reset();
  }
}
