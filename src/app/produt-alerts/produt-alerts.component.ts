import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-produt-alerts',
  templateUrl: './produt-alerts.component.html',
  styleUrls: ['./produt-alerts.component.css'],
})
export class ProdutAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}
}
