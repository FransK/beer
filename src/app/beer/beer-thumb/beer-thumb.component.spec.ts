/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeerThumbComponent } from './beer-thumb.component';

describe('BeerThumbComponent', () => {
  let component: BeerThumbComponent;
  let fixture: ComponentFixture<BeerThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
