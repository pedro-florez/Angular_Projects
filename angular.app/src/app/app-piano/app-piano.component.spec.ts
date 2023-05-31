import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPianoComponent } from './app-piano.component';

describe('AppPianoComponent', () => {
  let component: AppPianoComponent;
  let fixture: ComponentFixture<AppPianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
