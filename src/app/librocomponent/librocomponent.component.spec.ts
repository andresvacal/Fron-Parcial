import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrocomponentComponent } from './librocomponent.component';

describe('LibrocomponentComponent', () => {
  let component: LibrocomponentComponent;
  let fixture: ComponentFixture<LibrocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrocomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
