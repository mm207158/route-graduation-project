import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroMessages } from './erro-messages';

describe('ErroMessages', () => {
  let component: ErroMessages;
  let fixture: ComponentFixture<ErroMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
