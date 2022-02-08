import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutAlertsComponent } from './produt-alerts.component';

describe('ProdutAlertsComponent', () => {
  let component: ProdutAlertsComponent;
  let fixture: ComponentFixture<ProdutAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
