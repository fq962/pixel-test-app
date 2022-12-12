import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaQueHaceresComponent } from './lista-que-haceres.component';

describe('ListaQueHaceresComponent', () => {
  let component: ListaQueHaceresComponent;
  let fixture: ComponentFixture<ListaQueHaceresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaQueHaceresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaQueHaceresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
