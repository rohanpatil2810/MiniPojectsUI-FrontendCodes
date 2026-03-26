import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnquiry } from './add-enquiry';

describe('AddEnquiry', () => {
  let component: AddEnquiry;
  let fixture: ComponentFixture<AddEnquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEnquiry],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEnquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
