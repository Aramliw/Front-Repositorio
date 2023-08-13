import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarquivosComponent } from './addarquivos.component';

describe('AddarquivosComponent', () => {
  let component: AddarquivosComponent;
  let fixture: ComponentFixture<AddarquivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddarquivosComponent]
    });
    fixture = TestBed.createComponent(AddarquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
