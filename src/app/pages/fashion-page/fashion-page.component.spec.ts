import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionPageComponent } from './fashion-page.component';

describe('FashionPageComponent', () => {
  let component: FashionPageComponent;
  let fixture: ComponentFixture<FashionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
