import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhisList } from './whis-list';

describe('WhisList', () => {
  let component: WhisList;
  let fixture: ComponentFixture<WhisList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhisList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhisList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
