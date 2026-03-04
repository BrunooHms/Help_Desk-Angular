import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTicketssComponent } from './open-ticketss.component';

describe('OpenTicketssComponent', () => {
  let component: OpenTicketssComponent;
  let fixture: ComponentFixture<OpenTicketssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenTicketssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTicketssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
