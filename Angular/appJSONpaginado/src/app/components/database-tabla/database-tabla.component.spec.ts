import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTablaComponent } from './database-tabla.component';

describe('DatabaseTablaComponent', () => {
  let component: DatabaseTablaComponent;
  let fixture: ComponentFixture<DatabaseTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
