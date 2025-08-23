import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishCardPage } from './wish-card.page';

describe('WishCardPage', () => {
  let component: WishCardPage;
  let fixture: ComponentFixture<WishCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WishCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
