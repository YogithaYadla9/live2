import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCardsComponent } from './browse-cards.component';

describe('BrowseCardsComponent', () => {
  let component: BrowseCardsComponent;
  let fixture: ComponentFixture<BrowseCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
