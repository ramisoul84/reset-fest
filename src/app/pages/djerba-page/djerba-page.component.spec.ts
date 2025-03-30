import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjerbaPageComponent } from './djerba-page.component';

describe('DjerbaPageComponent', () => {
  let component: DjerbaPageComponent;
  let fixture: ComponentFixture<DjerbaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjerbaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjerbaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
