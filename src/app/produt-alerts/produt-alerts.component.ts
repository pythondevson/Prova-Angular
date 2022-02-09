import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-produt-alerts',
  templateUrl: './produt-alerts.component.html',
  styleUrls: ['./produt-alerts.component.css'],
})
export class ProdutAlertsComponent implements OnInit {
  //@Input dà la possibilità a product di ricevere in input dalla classe padre un valore di tipo Product o undefined
  @Input() product: Product | undefined;
  //@Output permette a notify di dare in output alla classe padre un valore
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
